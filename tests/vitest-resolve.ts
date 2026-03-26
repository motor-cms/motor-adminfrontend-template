import { resolve, dirname } from 'node:path'
import { existsSync, realpathSync } from 'node:fs'
import { createRequire } from 'node:module'

const rootDir = resolve(__dirname, '..')
const appDir = resolve(rootDir, 'app')

const LAYER_NAMES = [
  'motor-ui-core',
  'motor-ui-admin',
  'motor-ui-media'
]

const layerAppDirs = LAYER_NAMES.map(name => resolve(rootDir, 'layers', name, 'app'))

export function resolveAcrossLayers(relativePath: string): string | null {
  for (const ext of ['', '.ts', '.vue', '/index.ts']) {
    const candidate = resolve(appDir, relativePath + ext)
    if (existsSync(candidate)) return candidate
  }
  for (const layerDir of layerAppDirs) {
    for (const ext of ['', '.ts', '.vue', '/index.ts']) {
      const candidate = resolve(layerDir, relativePath + ext)
      if (existsSync(candidate)) return candidate
    }
  }
  return null
}

function resolveVuePath(): string {
  const req = createRequire(resolve(rootDir, 'package.json'))
  return dirname(req.resolve('vue/package.json'))
}

export function createLayerAliases() {
  return [
    { find: 'vue', replacement: resolveVuePath() },
    {
      find: /^[~@]\/(.*)/,
      replacement: '$1',
      customResolver(source: string) {
        return resolveAcrossLayers(source)
      }
    },
    {
      find: /^\.\.\/\.\.\/app\/(.*)/,
      replacement: '$1',
      customResolver(source: string) {
        return resolveAcrossLayers(source)
      }
    }
  ]
}
