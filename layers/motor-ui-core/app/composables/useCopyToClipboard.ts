export function useCopyToClipboard() {
  const copiedKey = ref<string | null>(null)
  let timeout: ReturnType<typeof setTimeout> | null = null

  async function copyText(text: string, key?: string) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text)
      } else {
        // Fallback for non-secure contexts (e.g. http://backend.energis.test)
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }

      copiedKey.value = key ?? text
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
        copiedKey.value = null
      }, 1500)
    } catch {
      // Silently fail if copy is not supported
    }
  }

  function isCopied(key: string): boolean {
    return copiedKey.value === key
  }

  return { copyText, isCopied }
}
