/**
 * Makes a file-upload submit cancellable (ZRMDEV-239).
 *
 * The media create/edit pages POST/PATCH the file and then navigate to the
 * overview. Without an abort signal the request kept running after the user hit
 * Cancel, used the browser back button or typed a new URL — and the trailing
 * router.push then yanked them to the media overview once the (now unwanted)
 * upload finally finished, even when they had navigated somewhere else.
 *
 * This composable hands out an AbortSignal per submit and aborts it whenever the
 * page is left (route change) or the component is torn down. The in-flight
 * request then rejects with an AbortError, which callers detect via
 * isAbortError() to skip both the success navigation and the error toast.
 */
export function useCancellableUpload() {
  let controller: AbortController | null = null

  /** Begin a new upload; aborts any previous one and returns a fresh signal. */
  function start(): AbortSignal {
    controller?.abort()
    controller = new AbortController()
    return controller.signal
  }

  /** Mark the current upload as completed so leaving no longer aborts it. */
  function done(): void {
    controller = null
  }

  /** Abort the current upload, if any. */
  function abort(): void {
    controller?.abort()
    controller = null
  }

  onBeforeRouteLeave(() => {
    abort()
    return true
  })
  onBeforeUnmount(abort)

  return { start, done, abort }
}

/**
 * True when an error was caused by aborting a fetch. ofetch surfaces the abort
 * either directly (err.name) or wrapped (err.cause.name), so check both.
 */
export function isAbortError(err: unknown): boolean {
  const e = err as { name?: string, cause?: { name?: string } } | null | undefined
  return e?.name === 'AbortError' || e?.cause?.name === 'AbortError'
}
