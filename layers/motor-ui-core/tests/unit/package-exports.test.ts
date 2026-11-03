import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

// Imports über den Paketnamen (@motor-cms/ui-core/app/…) funktionieren im Monorepo per Alias, im Kunden-Build
// aber nur für Pfade aus `exports` – sonst bricht dort der Nuxt-Build ("Missing … specifier").
const layersDir = resolve(__dirname, '../../..')

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    if (name === 'node_modules' || name === '.nuxt' || name === 'tests') return []
    return statSync(p).isDirectory() ? files(p) : (/\.(vue|ts)$/.test(name) ? [p] : [])
  })
}

describe('@motor-cms/ui-core exports', () => {
  it('jeder Laufzeit-Import über den Paketnamen ist exportiert', () => {
    const pkg = JSON.parse(readFileSync(resolve(__dirname, '../../package.json'), 'utf8')) as { exports: Record<string, string> }
    const missing: string[] = []
    for (const layer of ['motor-ui-core', 'motor-ui-admin', 'motor-ui-media']) {
      for (const f of files(join(layersDir, layer, 'app'))) {
        const src = readFileSync(f, 'utf8')
        for (const m of src.matchAll(/^import (?!type )[^\n]*from '@motor-cms\/ui-core(\/[^']+)'/gm)) {
          if (!pkg.exports[`.${m[1]}`]) missing.push(`${f.replace(layersDir, '')}: ${m[1]}`)
        }
      }
    }
    expect(missing).toEqual([])
  })
})
