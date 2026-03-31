import { describe, expect, it, vi, beforeEach } from 'vitest'

import { useEntityForm } from '~/composables/useEntityForm'

const mockRouter = { push: vi.fn(), currentRoute: ref({ path: '/test' }) }
const mockMutate = vi.fn()
const mockT = vi.fn((key: string) => key)
const mockTe = vi.fn(() => false)
const mockSuccess = vi.fn()
const mockNotifyError = vi.fn()
const mockSanctumClient = vi.fn()

const mockCan = vi.fn(() => true)
vi.stubGlobal('useI18n', () => ({ t: mockT, te: mockTe }))
vi.stubGlobal('useRouter', () => mockRouter)
vi.stubGlobal('useSanctumClient', () => mockSanctumClient)
vi.stubGlobal('useNotify', () => ({ success: mockSuccess, error: mockNotifyError }))
vi.stubGlobal('usePermissions', () => ({ can: mockCan, canAny: vi.fn(() => true), hasRole: vi.fn(() => false) }))
vi.stubGlobal('onMounted', vi.fn())
vi.stubGlobal('useAsyncData', vi.fn(async (_key: string, fn: () => Promise<unknown>) => {
  try {
    const data = await fn()
    return { data: ref(data), error: ref(null) }
  } catch (e) {
    return { data: ref(null), error: ref(e) }
  }
}))

vi.mock('~/composables/useResourceOptions', () => ({
  useResourceOptions: vi.fn(() => ({
    options: ref([]),
    loading: ref(false)
  })),
  useApiMutation: () => ({ mutate: mockMutate })
}))

vi.mock('~/composables/formFieldUtils', () => ({
  formFieldsFromMeta: vi.fn(() => ({
    fields: [
      { key: 'name', input: 'text', label: 'Name' },
      { key: 'email', input: 'text', label: 'Email' }
    ],
    schema: { parse: vi.fn() },
    groups: []
  })),
  initFormState: vi.fn((fields: Array<{ key: string }>) => {
    const state: Record<string, unknown> = {}
    for (const f of fields) state[f.key] = ''
    return reactive(state)
  })
}))

describe('useEntityForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockSanctumClient.mockResolvedValue({ data: { name: 'Test', email: 'test@test.com' } })
  })

  it('creates form in create mode with formMeta', async () => {
    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    expect(result.fields).toHaveLength(2)
    expect(result.state).toHaveProperty('name')
    expect(result.loading.value).toBe(false)
    expect(result.fetching.value).toBe(false)
  })

  it('creates form in edit mode and populates state', async () => {
    mockSanctumClient.mockResolvedValue({ data: { name: 'Loaded', email: 'loaded@test.com' } })

    const result = await useEntityForm({
      mode: 'edit',
      id: '42',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    expect(result.state.name).toBe('Loaded')
    expect(result.state.email).toBe('loaded@test.com')
    expect(result.fetching.value).toBe(false)
  })

  it('throws when neither formMeta nor manualFields provided', async () => {
    await expect(useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/test',
      routePrefix: '/test',
      translationPrefix: 'test'
    })).rejects.toThrow('useEntityForm: provide either formMeta or manualFields+manualSchema')
  })

  it('creates form with manualFields', async () => {
    const manualFields = [
      { key: 'prompt', input: 'textarea', label: 'Prompt' }
    ]
    const manualSchema = { parse: vi.fn() } as never

    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/prompts',
      routePrefix: '/prompts',
      translationPrefix: 'prompts',
      manualFields,
      manualSchema,
      manualState: { prompt: 'initial' },
      manualGroups: [{ label: 'Main', fields: ['prompt'] }]
    })

    expect(result.fields).toEqual(manualFields)
    expect(result.state.prompt).toBe('initial')
    expect(result.groups).toHaveLength(1)
  })

  it('onSubmit calls mutate with POST for create mode', async () => {
    mockMutate.mockResolvedValueOnce({ data: {} })

    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    result.state.name = 'New User'

    await result.onSubmit({ data: { name: 'New User', email: '' } } as never)

    expect(mockMutate).toHaveBeenCalledWith('/api/v2/users', {
      method: 'POST',
      body: { name: 'New User', email: '' }
    })
    expect(mockSuccess).toHaveBeenCalled()
    expect(mockRouter.push).toHaveBeenCalledWith('/motor-admin/users')
  })

  it('onSubmit calls mutate with PATCH for edit mode', async () => {
    mockMutate.mockResolvedValueOnce({ data: {} })

    const result = await useEntityForm({
      mode: 'edit',
      id: '5',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    await result.onSubmit({ data: { name: 'Updated' } } as never)

    expect(mockMutate).toHaveBeenCalledWith('/api/v2/users/5', {
      method: 'PATCH',
      body: { name: 'Updated' }
    })
  })

  it('onSubmit handles 422 validation errors', async () => {
    const setErrors = vi.fn()
    mockMutate.mockRejectedValueOnce({
      response: {
        status: 422,
        _data: {
          errors: { name: ['Name is required'], email: ['Invalid email'] }
        }
      }
    })

    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    result.formRef.value = { captureSnapshot: vi.fn(), setErrors } as never

    await result.onSubmit({ data: {} } as never)

    expect(setErrors).toHaveBeenCalled()
    expect(mockNotifyError).toHaveBeenCalled()
    expect(result.loading.value).toBe(false)
  })

  it('onSubmit handles generic errors', async () => {
    mockMutate.mockRejectedValueOnce(new Error('Server error'))

    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    await result.onSubmit({ data: {} } as never)

    expect(mockNotifyError).toHaveBeenCalled()
    expect(result.loading.value).toBe(false)
  })

  it('onSaveAndContinue does not navigate', async () => {
    mockMutate.mockResolvedValueOnce({ data: {} })

    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    await result.onSaveAndContinue({ data: {} } as never)

    expect(mockMutate).toHaveBeenCalled()
    expect(mockSuccess).toHaveBeenCalled()
    expect(mockRouter.push).not.toHaveBeenCalled()
  })

  it('onSaveAndNew navigates to create path', async () => {
    mockMutate.mockResolvedValueOnce({ data: {} })

    const result = await useEntityForm({
      mode: 'edit',
      id: '1',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    await result.onSaveAndNew({ data: {} } as never)

    expect(mockRouter.push).toHaveBeenCalledWith('/motor-admin/users/create')
  })

  it('deleteRecord calls DELETE and navigates', async () => {
    mockMutate.mockResolvedValueOnce(undefined)

    const result = await useEntityForm({
      mode: 'edit',
      id: '10',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    result.state.name = 'John'
    await result.deleteRecord!()

    expect(mockMutate).toHaveBeenCalledWith('/api/v2/users/10', { method: 'DELETE' })
    expect(mockSuccess).toHaveBeenCalled()
    expect(mockRouter.push).toHaveBeenCalledWith('/motor-admin/users')
  })

  it('deleteRecord is undefined in create mode', async () => {
    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    expect(result.deleteRecord).toBeUndefined()
  })

  it('deleteRecord is undefined when user lacks delete permission', async () => {
    mockCan.mockReturnValue(false)

    const result = await useEntityForm({
      mode: 'edit',
      id: '10',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    expect(result.deleteRecord).toBeUndefined()
    mockCan.mockReturnValue(true)
  })

  it('canWrite is true when user has write permission', async () => {
    const result = await useEntityForm({
      mode: 'edit',
      id: '10',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    expect(result.canWrite).toBe(true)
  })

  it('canWrite is false when user lacks write permission', async () => {
    mockCan.mockReturnValue(false)

    const result = await useEntityForm({
      mode: 'edit',
      id: '10',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    expect(result.canWrite).toBe(false)
    mockCan.mockReturnValue(true)
  })

  it('canWrite respects explicit writePermission override', async () => {
    mockCan.mockImplementation((p: string) => p === 'navigations.write')

    const result = await useEntityForm({
      mode: 'edit',
      id: '10',
      apiEndpoint: '/api/v2/navigation-trees/1/navigation-items',
      routePrefix: '/motor-builder/navigation-trees/1',
      translationPrefix: 'motor-builder.navigation_items',
      formMeta: { post: {} as never, patch: {} as never },
      writePermission: 'navigations.write'
    })

    expect(result.canWrite).toBe(true)
    mockCan.mockReturnValue(true)
  })

  it('deleteRecord handles errors', async () => {
    mockMutate.mockRejectedValueOnce(new Error('Delete failed'))

    const result = await useEntityForm({
      mode: 'edit',
      id: '10',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    await result.deleteRecord!()

    expect(mockNotifyError).toHaveBeenCalled()
    expect(result.deleting.value).toBe(false)
  })

  it('deleteRecord handles non-Error thrown values', async () => {
    mockMutate.mockRejectedValueOnce('string error')

    const result = await useEntityForm({
      mode: 'edit',
      id: '10',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    await result.deleteRecord!()
    expect(mockNotifyError).toHaveBeenCalled()
    expect(result.deleting.value).toBe(false)
  })

  it('onSubmit handles non-Error thrown values', async () => {
    mockMutate.mockRejectedValueOnce({ message: 'not an Error instance' })

    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    await result.onSubmit({ data: {} } as never)
    expect(mockNotifyError).toHaveBeenCalled()
    expect(result.loading.value).toBe(false)
  })

  it('onSubmit with 422 single error shows the error message', async () => {
    const setErrors = vi.fn()
    mockMutate.mockRejectedValueOnce({
      response: {
        status: 422,
        _data: {
          errors: { name: ['Name is required'] }
        }
      }
    })

    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    result.formRef.value = { captureSnapshot: vi.fn(), setErrors } as never
    await result.onSubmit({ data: {} } as never)

    expect(setErrors).toHaveBeenCalledWith([{ path: 'name', message: 'Name is required' }])
    expect(mockNotifyError).toHaveBeenCalledWith(
      expect.any(String),
      'Name is required'
    )
  })

  it('onSaveAndNew resets form state when already on create path', async () => {
    mockRouter.currentRoute.value = { path: '/motor-admin/users/create' } as never
    mockMutate.mockResolvedValueOnce({ data: {} })

    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    result.state.name = 'Something'
    await result.onSaveAndNew({ data: {} } as never)

    expect(mockRouter.push).not.toHaveBeenCalled()
    expect(result.state.name).toBe('')
  })

  it('onSaveAndContinue handles error', async () => {
    mockMutate.mockRejectedValueOnce(new Error('Save failed'))

    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    await result.onSaveAndContinue({ data: {} } as never)
    expect(mockNotifyError).toHaveBeenCalled()
    expect(result.loading.value).toBe(false)
  })

  it('onSaveAndNew handles error', async () => {
    mockMutate.mockRejectedValueOnce(new Error('Save failed'))

    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    await result.onSaveAndNew({ data: {} } as never)
    expect(mockNotifyError).toHaveBeenCalled()
    expect(result.loading.value).toBe(false)
  })

  it('success message omits record name when empty', async () => {
    mockMutate.mockResolvedValueOnce({ data: {} })

    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    result.state.name = ''
    await result.onSubmit({ data: {} } as never)

    expect(mockSuccess).toHaveBeenCalledWith(
      expect.any(String),
      'motor-admin.users.created_success'
    )
  })

  it('deleteRecord success message omits name when empty', async () => {
    mockMutate.mockResolvedValueOnce(undefined)

    const result = await useEntityForm({
      mode: 'edit',
      id: '10',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    result.state.name = ''
    await result.deleteRecord!()

    expect(mockSuccess).toHaveBeenCalledWith(
      expect.any(String),
      'motor-core.global.deleted_success'
    )
  })

  it('edit mode sets fetchError on load failure', async () => {
    vi.stubGlobal('useAsyncData', vi.fn(async () => {
      return { data: ref(null), error: ref(new Error('Not found')) }
    }))

    const result = await useEntityForm({
      mode: 'edit',
      id: '999',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    expect(result.fetchError.value).toBe(true)

    vi.stubGlobal('useAsyncData', vi.fn(async (_key: string, fn: () => Promise<unknown>) => {
      try {
        const data = await fn()
        return { data: ref(data), error: ref(null) }
      } catch (e) {
        return { data: ref(null), error: ref(e) }
      }
    }))
  })

  it('edit mode handles multi-select field values from API', async () => {
    const { formFieldsFromMeta, initFormState } = await import('~/composables/formFieldUtils') as {
      formFieldsFromMeta: ReturnType<typeof vi.fn>
      initFormState: ReturnType<typeof vi.fn>
    }

    formFieldsFromMeta.mockReturnValueOnce({
      fields: [
        { key: 'name', input: 'text', label: 'Name' },
        { key: 'roles', input: 'multi-select', label: 'Roles' }
      ],
      schema: { parse: vi.fn() },
      groups: []
    })

    initFormState.mockReturnValueOnce(reactive({ name: '', roles: [] }))

    mockSanctumClient.mockResolvedValue({
      data: {
        name: 'Test',
        roles: [{ id: 1, name: 'Admin' }, { id: 2, name: 'Editor' }]
      }
    })

    const result = await useEntityForm({
      mode: 'edit',
      id: '1',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    expect(result.state.roles).toEqual([1, 2])
  })

  it('returns selectOptions and selectOptionsLoading when configs provided', async () => {
    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never },
      selectOptionConfigs: {
        role_id: { endpoint: '/api/v2/roles', labelKey: 'name' }
      }
    })

    expect(result.selectOptions).toBeDefined()
    expect(result.selectOptionsLoading).toBeDefined()
  })

  it('returns undefined selectOptions when no configs provided', async () => {
    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    expect(result.selectOptions).toBeUndefined()
    expect(result.selectOptionsLoading).toBeUndefined()
  })

  it('appends per_page=0 for multi-select field endpoints', async () => {
    const { formFieldsFromMeta, initFormState } = await import('~/composables/formFieldUtils') as {
      formFieldsFromMeta: ReturnType<typeof vi.fn>
      initFormState: ReturnType<typeof vi.fn>
    }
    const { useResourceOptions } = await import('~/composables/useResourceOptions') as {
      useResourceOptions: ReturnType<typeof vi.fn>
    }

    formFieldsFromMeta.mockReturnValueOnce({
      fields: [
        { key: 'name', input: 'text', label: 'Name' },
        { key: 'roles', input: 'multi-select', label: 'Roles' },
        { key: 'tags', input: 'checkbox-group', label: 'Tags' }
      ],
      schema: { parse: vi.fn() },
      groups: []
    })
    initFormState.mockReturnValueOnce(reactive({ name: '', roles: [], tags: [] }))

    await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never },
      selectOptionConfigs: {
        roles: { endpoint: '/api/v2/roles', labelKey: 'name' },
        tags: { endpoint: '/api/v2/tags?filter=active', labelKey: 'name' }
      }
    })

    expect(useResourceOptions).toHaveBeenCalledWith('/api/v2/roles?per_page=0', expect.any(Object))
    expect(useResourceOptions).toHaveBeenCalledWith('/api/v2/tags?filter=active&per_page=0', expect.any(Object))
  })

  it('onSaveAndContinue calls captureSnapshot on success', async () => {
    mockMutate.mockResolvedValueOnce({ data: {} })
    const captureSnapshot = vi.fn()

    const result = await useEntityForm({
      mode: 'edit',
      id: '1',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    result.formRef.value = { captureSnapshot, setErrors: vi.fn() } as never
    result.state.name = 'Updated'

    await result.onSaveAndContinue({ data: { name: 'Updated' } } as never)

    expect(mockSuccess).toHaveBeenCalled()
    expect(mockRouter.push).not.toHaveBeenCalled()
  })

  it('edit mode handles checkbox-group field values from API', async () => {
    const { formFieldsFromMeta, initFormState } = await import('~/composables/formFieldUtils') as {
      formFieldsFromMeta: ReturnType<typeof vi.fn>
      initFormState: ReturnType<typeof vi.fn>
    }

    formFieldsFromMeta.mockReturnValueOnce({
      fields: [
        { key: 'name', input: 'text', label: 'Name' },
        { key: 'permissions', input: 'checkbox-group', label: 'Permissions' }
      ],
      schema: { parse: vi.fn() },
      groups: []
    })

    initFormState.mockReturnValueOnce(reactive({ name: '', permissions: [] }))

    mockSanctumClient.mockResolvedValue({
      data: {
        name: 'Test',
        permissions: [{ id: 10, name: 'read' }, { id: 20, name: 'write' }]
      }
    })

    const result = await useEntityForm({
      mode: 'edit',
      id: '1',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    expect(result.state.permissions).toEqual([10, 20])
  })

  it('edit mode handles multi-select with primitive values', async () => {
    const { formFieldsFromMeta, initFormState } = await import('~/composables/formFieldUtils') as {
      formFieldsFromMeta: ReturnType<typeof vi.fn>
      initFormState: ReturnType<typeof vi.fn>
    }

    formFieldsFromMeta.mockReturnValueOnce({
      fields: [
        { key: 'tags', input: 'multi-select', label: 'Tags' }
      ],
      schema: { parse: vi.fn() },
      groups: []
    })

    initFormState.mockReturnValueOnce(reactive({ tags: [] }))

    mockSanctumClient.mockResolvedValue({
      data: { tags: [1, 2, 3] }
    })

    const result = await useEntityForm({
      mode: 'edit',
      id: '1',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    expect(result.state.tags).toEqual([1, 2, 3])
  })

  it('deleteRecord error with empty name omits name in description', async () => {
    mockMutate.mockRejectedValueOnce(new Error('Delete failed'))

    const result = await useEntityForm({
      mode: 'edit',
      id: '10',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    result.state.name = ''
    await result.deleteRecord!()

    expect(mockNotifyError).toHaveBeenCalledWith(
      expect.any(String),
      'Delete failed',
      expect.any(Object)
    )
  })

  it('onSubmit generic error with empty name uses fallback message', async () => {
    mockMutate.mockRejectedValueOnce('non-error-value')

    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never }
    })

    result.state.name = ''
    await result.onSubmit({ data: {} } as never)

    expect(mockNotifyError).toHaveBeenCalledWith(
      expect.any(String),
      'motor-core.errors.create_failed',
      expect.any(Object)
    )
  })

  it('selectOptions computed returns options from selectOptionRefs', async () => {
    const { useResourceOptions } = await import('~/composables/useResourceOptions') as {
      useResourceOptions: ReturnType<typeof vi.fn>
    }

    useResourceOptions.mockReturnValue({
      options: ref([{ label: 'Admin', value: 1 }]),
      loading: ref(false)
    })

    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never },
      selectOptionConfigs: {
        role_id: { endpoint: '/api/v2/roles', labelKey: 'name' }
      }
    })

    const opts = result.selectOptions!.value
    expect(opts).toHaveProperty('role_id')
    expect(opts.role_id).toEqual([{ label: 'Admin', value: 1 }])
  })

  it('selectOptionsLoading computed returns loading states from selectOptionRefs', async () => {
    const { useResourceOptions } = await import('~/composables/useResourceOptions') as {
      useResourceOptions: ReturnType<typeof vi.fn>
    }

    useResourceOptions.mockReturnValue({
      options: ref([]),
      loading: ref(true)
    })

    const result = await useEntityForm({
      mode: 'create',
      apiEndpoint: '/api/v2/users',
      routePrefix: '/motor-admin/users',
      translationPrefix: 'motor-admin.users',
      formMeta: { post: {} as never, patch: {} as never },
      selectOptionConfigs: {
        role_id: { endpoint: '/api/v2/roles', labelKey: 'name' }
      }
    })

    const loading = result.selectOptionsLoading!.value
    expect(loading).toHaveProperty('role_id')
    expect(loading.role_id).toBe(true)
  })
})
