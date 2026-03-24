import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest'

import { useCopyToClipboard } from '../../app/composables/useCopyToClipboard'

const mockWriteText = vi.fn().mockResolvedValue(undefined)

vi.stubGlobal('window', { isSecureContext: true })
vi.stubGlobal('navigator', { clipboard: { writeText: mockWriteText } })

describe('useCopyToClipboard', () => {
  beforeEach(() => {
    mockWriteText.mockClear()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('copies text via clipboard API', async () => {
    const { copyText } = useCopyToClipboard()

    await copyText('hello world')

    expect(mockWriteText).toHaveBeenCalledWith('hello world')
  })

  it('sets copiedKey after copy', async () => {
    const { copyText, isCopied } = useCopyToClipboard()

    await copyText('test', 'my-key')

    expect(isCopied('my-key')).toBe(true)
    expect(isCopied('other-key')).toBe(false)
  })

  it('uses text as key when no key provided', async () => {
    const { copyText, isCopied } = useCopyToClipboard()

    await copyText('hello')

    expect(isCopied('hello')).toBe(true)
  })

  it('resets copiedKey after delay', async () => {
    vi.useFakeTimers()
    const { copyText, isCopied } = useCopyToClipboard()

    await copyText('test', 'my-key')
    expect(isCopied('my-key')).toBe(true)

    vi.advanceTimersByTime(1500)
    expect(isCopied('my-key')).toBe(false)
  })

  it('clears previous timeout on rapid copies', async () => {
    vi.useFakeTimers()
    const { copyText, isCopied } = useCopyToClipboard()

    await copyText('first', 'key1')
    vi.advanceTimersByTime(500)

    await copyText('second', 'key2')
    expect(isCopied('key1')).toBe(false)
    expect(isCopied('key2')).toBe(true)

    vi.advanceTimersByTime(1500)
    expect(isCopied('key2')).toBe(false)
  })

  it('uses fallback when clipboard API unavailable', async () => {
    vi.stubGlobal('navigator', { clipboard: undefined })
    vi.stubGlobal('window', { isSecureContext: false })

    const mockTextarea = {
      value: '',
      style: {} as CSSStyleDeclaration,
      select: vi.fn()
    }
    const mockCreateElement = vi.fn().mockReturnValue(mockTextarea)
    const mockAppendChild = vi.fn()
    const mockRemoveChild = vi.fn()
    const mockExecCommand = vi.fn()

    vi.stubGlobal('document', {
      createElement: mockCreateElement,
      body: { appendChild: mockAppendChild, removeChild: mockRemoveChild },
      execCommand: mockExecCommand
    })

    const { copyText, isCopied } = useCopyToClipboard()
    await copyText('fallback text', 'key')

    expect(mockCreateElement).toHaveBeenCalledWith('textarea')
    expect(mockTextarea.value).toBe('fallback text')
    expect(mockTextarea.select).toHaveBeenCalled()
    expect(mockExecCommand).toHaveBeenCalledWith('copy')
    expect(mockAppendChild).toHaveBeenCalled()
    expect(mockRemoveChild).toHaveBeenCalled()
    expect(isCopied('key')).toBe(true)

    vi.stubGlobal('window', { isSecureContext: true })
    vi.stubGlobal('navigator', { clipboard: { writeText: mockWriteText } })
  })

  it('silently handles copy errors', async () => {
    mockWriteText.mockRejectedValueOnce(new Error('Copy failed'))

    const { copyText, isCopied } = useCopyToClipboard()
    await copyText('text', 'key')

    expect(isCopied('key')).toBe(false)
  })
})
