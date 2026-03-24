import { resolve } from 'node:path'
import { existsSync } from 'node:fs'

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

export function createLayerAliases() {
  return [
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
