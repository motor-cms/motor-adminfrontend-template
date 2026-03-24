import type { GridParams, PaginatedResponse } from '../types/grid'

interface UseGridFetchOptions<TApi, TView> {
  transform?: (record: TApi) => TView
}

export function useGridFetch<TApi, TView = TApi>(
  endpoint: string,
  options?: UseGridFetchOptions<TApi, TView>
): (params: GridParams) => Promise<PaginatedResponse<TView>> {
  const client = useSanctumClient()

  return async (params: GridParams): Promise<PaginatedResponse<TView>> => {
    const response = await client<PaginatedResponse<TApi>>(endpoint, {
      query: params
    })

    if (options?.transform) {
      return {
        ...response,
        data: response.data.map(options.transform)
      }
    }

    return response as unknown as PaginatedResponse<TView>
  }
}
