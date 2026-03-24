import { describe, expect, it, vi, beforeEach } from 'vitest'

import { useGridFetch } from '~/composables/useGridFetch'
import { useGridData } from '~/composables/useGridData'

const mockClient = vi.fn()
vi.stubGlobal('useSanctumClient', () => mockClient)

vi.stubGlobal('useGridFetch', useGridFetch)

describe('useGridFetch', () => {
  beforeEach(() => {
    mockClient.mockReset()
  })

  it('returns a fetch function', () => {
    const fetcher = useGridFetch('/api/v2/users')
    expect(typeof fetcher).toBe('function')
  })

  it('fetches data from the endpoint with query params', async () => {
    mockClient.mockResolvedValue({
      data: [{ id: 1, name: 'Alice' }],
      meta: { current_page: 1, last_page: 1, per_page: 25, total: 1, from: 1, to: 1 }
    })

    const fetcher = useGridFetch('/api/v2/users')
    const result = await fetcher({ page: 1, per_page: 25 })

    expect(mockClient).toHaveBeenCalledWith('/api/v2/users', {
      query: { page: 1, per_page: 25 }
    })
    expect(result.data).toHaveLength(1)
    expect(result.data[0].name).toBe('Alice')
  })

  it('applies transform when provided', async () => {
    mockClient.mockResolvedValue({
      data: [{ id: 1, full_name: 'Alice Doe' }],
      meta: { current_page: 1, last_page: 1, per_page: 25, total: 1, from: 1, to: 1 }
    })

    const fetcher = useGridFetch<{ id: number, full_name: string }, { id: number, name: string }>(
      '/api/v2/users',
      { transform: record => ({ id: record.id, name: record.full_name }) }
    )
    const result = await fetcher({ page: 1, per_page: 25 })

    expect(result.data[0].name).toBe('Alice Doe')
  })

  it('returns data as-is when no transform', async () => {
    mockClient.mockResolvedValue({
      data: [{ id: 1, name: 'Bob' }],
      meta: { current_page: 1, last_page: 1, per_page: 25, total: 1, from: 1, to: 1 }
    })

    const fetcher = useGridFetch('/api/v2/users')
    const result = await fetcher({ page: 1, per_page: 25 })

    expect(result.data[0]).toEqual({ id: 1, name: 'Bob' })
  })

  it('passes search parameter in query', async () => {
    mockClient.mockResolvedValue({
      data: [],
      meta: { current_page: 1, last_page: 1, per_page: 25, total: 0, from: null, to: null }
    })

    const fetcher = useGridFetch('/api/v2/users')
    await fetcher({ page: 1, per_page: 25, search: 'alice' })

    expect(mockClient).toHaveBeenCalledWith('/api/v2/users', {
      query: { page: 1, per_page: 25, search: 'alice' }
    })
  })
})

describe('useGridData', () => {
  beforeEach(() => {
    mockClient.mockReset()
  })

  it('returns an object with a fetch function', () => {
    const gridData = useGridData('/api/v2/users')
    expect(gridData.fetch).toBeDefined()
    expect(typeof gridData.fetch).toBe('function')
  })

  it('fetch delegates to useGridFetch', async () => {
    mockClient.mockResolvedValue({
      data: [{ id: 1 }],
      meta: { current_page: 1, last_page: 1, per_page: 25, total: 1, from: 1, to: 1 }
    })

    const { fetch } = useGridData('/api/v2/users')
    const result = await fetch({ page: 1, per_page: 25 })

    expect(result.data).toHaveLength(1)
  })
})
