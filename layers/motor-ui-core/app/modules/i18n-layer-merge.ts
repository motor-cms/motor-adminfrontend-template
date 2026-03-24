import { defineNuxtModule, useLogger } from '@nuxt/kit'
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs'
import { glob } from 'glob'
import { join } from 'path'

type NestedMessages = { [key: string]: string | NestedMessages }

const logger = useLogger('i18n-layer-merge')

// Convert flat key like "motor-admin.users.users" to nested object
function setNestedValue(obj: NestedMessages, path: string, value: string): void {
  const keys = path.split('.')
  if (keys.length === 0) return

  let current = obj

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]!
    if (!(key in current) || typeof current[key] === 'string') {
      current[key] = {}
    }
    current = current[key] as NestedMessages
  }

  const lastKey = keys[keys.length - 1]
  if (lastKey) {
    current[lastKey] = value
  }
}

// Count total leaf keys in nested object
function countKeys(obj: NestedMessages): number {
  let count = 0
  for (const value of Object.values(obj)) {
    if (typeof value === 'string') {
      count++
    } else {
      count += countKeys(value)
    }
  }
  return count
}

export default defineNuxtModule({
  meta: {
    name: 'i18n-layer-merge',
    configKey: 'i18nLayerMerge'
  },

  async setup(_options, nuxt) {
    // Collect lang directories from layers (in order) + main project
    const langDirs: string[] = []

    // Add layer lang directories (first layer is the app itself in Nuxt 4)
    for (const layer of nuxt.options._layers) {
      const layerLangDir = join(layer.cwd, 'lang')
      if (existsSync(layerLangDir)) {
        langDirs.push(layerLangDir)
      }
      // Also check app/lang for the main app
      const appLayerLangDir = join(layer.cwd, 'app', 'lang')
      if (existsSync(appLayerLangDir)) {
        langDirs.push(appLayerLangDir)
      }
    }

    logger.info(`Found ${langDirs.length} lang directories to merge`)

    // Merge function for a single locale - returns nested structure
    async function mergeLangFilesForLocale(locale: string): Promise<NestedMessages> {
      const messages: NestedMessages = {}

      for (const langDir of langDirs) {
        const localeDir = join(langDir, locale)
        if (!existsSync(localeDir)) continue

        const files = await glob('**/*.json', { cwd: localeDir })

        for (const file of files) {
          const filePath = join(localeDir, file)
          try {
            const content = JSON.parse(readFileSync(filePath, 'utf-8'))

            // Build key prefix from path: motor-builder/builder_pages.json -> motor-builder.builder_pages
            const keyPrefix = file
              .replace(/\.json$/, '')
              .replace(/\//g, '.')

            // Add each translation with nested key structure
            for (const [key, value] of Object.entries(content)) {
              const fullKey = `${keyPrefix}.${key}`
              setNestedValue(messages, fullKey, value as string)
            }
          } catch (e) {
            logger.warn(`Failed to parse ${filePath}: ${e}`)
          }
        }
      }

      return messages
    }

    // Write merged files to a cache directory outside buildDir.
    // buildDir (.nuxt/) gets cleaned between prepare and build, so writing there
    // causes ENOENT errors during Docker builds. node_modules/.cache/ survives cleanup.
    const mergedDir = join(nuxt.options.rootDir, 'node_modules', '.cache', 'i18n-merged')
    nuxt.options.alias['#i18n-merged'] = mergedDir

    const locales = ['de', 'en']

    mkdirSync(mergedDir, { recursive: true })
    for (const locale of locales) {
      const messages = await mergeLangFilesForLocale(locale)
      const outputPath = join(mergedDir, `${locale}.json`)
      writeFileSync(outputPath, JSON.stringify(messages, null, 2))
      logger.info(`Merged ${countKeys(messages)} keys for locale: ${locale}`)
    }

    // Dev mode: watch for changes
    if (nuxt.options.dev) {
      for (const langDir of langDirs) {
        nuxt.options.watch = nuxt.options.watch || []
        nuxt.options.watch.push(langDir)
      }
    }
  }
})
