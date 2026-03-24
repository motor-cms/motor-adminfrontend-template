// AI-generated — review before merging
import { describe, expect, it, vi, afterEach } from 'vitest'
import { fileToBase64, fileToDataUrl } from '../../app/utils/file'

class MockFileReader {
  result: string | null = null
  error: DOMException | null = null
  onload: (() => void) | null = null
  onerror: ((ev: unknown) => void) | null = null

  readAsDataURL(_file: File) {
    setTimeout(() => {
      this.result = 'data:text/plain;base64,aGVsbG8='
      this.onload?.()
    }, 0)
  }
}

class FailingFileReader extends MockFileReader {
  override readAsDataURL(_file: File) {
    setTimeout(() => {
      this.error = new DOMException('Read failed')
      this.onerror?.(null)
    }, 0)
  }
}

function createMockFile(content: string, name: string, type: string): File {
  const blob = new Blob([content], { type })
  return new File([blob], name, { type })
}

describe('file utils', () => {
  const originalFileReader = globalThis.FileReader

  afterEach(() => {
    if (originalFileReader) {
      vi.stubGlobal('FileReader', originalFileReader)
    }
  })

  it('fileToBase64-valid-file', async () => {
    vi.stubGlobal('FileReader', MockFileReader)
    const file = createMockFile('hello', 'test.txt', 'text/plain')
    const result = await fileToBase64(file)
    expect(typeof result).toBe('string')
    expect(result).toContain('data:')
  })

  it('fileToBase64-rejects-on-error', async () => {
    vi.stubGlobal('FileReader', FailingFileReader)
    const file = createMockFile('hello', 'test.txt', 'text/plain')
    await expect(fileToBase64(file)).rejects.toBeTruthy()
  })

  it('fileToDataUrl-valid-file', async () => {
    vi.stubGlobal('FileReader', MockFileReader)
    const file = createMockFile('hello', 'document.pdf', 'application/pdf')
    const result = await fileToDataUrl(file)
    expect(result).toHaveProperty('dataUrl')
    expect(result).toHaveProperty('name', 'document.pdf')
    expect(typeof result.dataUrl).toBe('string')
  })

  it('fileToDataUrl-rejects-non-string', async () => {
    class NonStringFileReader extends MockFileReader {
      override readAsDataURL(_file: File) {
        setTimeout(() => {
          this.result = new ArrayBuffer(8) as unknown as string
          this.onload?.()
        }, 0)
      }
    }
    vi.stubGlobal('FileReader', NonStringFileReader)
    const file = createMockFile('x', 'test.bin', 'application/octet-stream')
    await expect(fileToDataUrl(file)).rejects.toBeTruthy()
  })

  it('fileToBase64 rejects when result is not a string', async () => {
    class NonStringBase64Reader extends MockFileReader {
      override readAsDataURL(_file: File) {
        setTimeout(() => {
          this.result = null as unknown as string
          this.onload?.()
        }, 0)
      }
    }
    vi.stubGlobal('FileReader', NonStringBase64Reader)
    const file = createMockFile('x', 'test.bin', 'application/octet-stream')
    await expect(fileToBase64(file)).rejects.toThrow('Failed to convert file to base64')
  })
})
