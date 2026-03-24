import type { GridParams, PaginatedResponse } from '../types/grid'

interface UseGridDataOptions<TApi, TView> {
  transform?: (record: TApi) => TView
}

export function useGridData<TApi, TView = TApi>(
  endpoint: string,
  options?: UseGridDataOptions<TApi, TView>
): { fetch: (params: GridParams) => Promise<PaginatedResponse<TView>> } {
  const fetch = useGridFetch<TApi, TView>(endpoint, options)
  return { fetch }
}
