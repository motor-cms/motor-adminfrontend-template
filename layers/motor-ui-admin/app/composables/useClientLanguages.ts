import type { Ref, ComputedRef } from 'vue'
import type { components } from '@motor-cms/ui-core/app/types/generated/api'

type NavigationTreeResource = components['schemas']['NavigationTreeResource']
type LanguageResource = components['schemas']['LanguageResource']

interface PaginatedResponse<T> {
  data: T[]
}

export interface ClientLanguage {
  id: number
  name: string
}

export interface UseClientLanguagesReturn {
  languages: Ref<ClientLanguage[]>
  isMultiLanguage: ComputedRef<boolean>
  loading: Ref<boolean>
}

export function useClientLanguages(clientId: Ref<string | number>): UseClientLanguagesReturn {
  const client = useSanctumClient()

  const languages = ref<ClientLanguage[]>([])
  const loading = ref(false)

  const isMultiLanguage = computed(() => languages.value.length > 1)

  watch(
    clientId,
    async (id) => {
      if (!id) {
        languages.value = []
        return
      }

      loading.value = true
      try {
        const treesResponse = await client<PaginatedResponse<NavigationTreeResource>>(
          `/api/v2/navigation-trees?filter[client_id]=${id}&per_page=100`
        )

        const trees = treesResponse.data ?? []

        const distinctLanguageIds = [...new Set(
          trees
            .map((tree) => Number(tree.language_id))
            .filter((langId) => !isNaN(langId) && langId > 0)
        )]

        if (distinctLanguageIds.length === 0) {
          languages.value = []
          return
        }

        const languagesResponse = await client<PaginatedResponse<LanguageResource>>(
          '/api/v2/languages?per_page=100'
        )

        const allLanguages = languagesResponse.data ?? []

        languages.value = allLanguages
          .filter((lang) => distinctLanguageIds.includes(lang.id))
          .map((lang) => ({ id: lang.id, name: lang.english_name }))
          .sort((a, b) => a.id - b.id)
      }
      finally {
        loading.value = false
      }
    },
    { immediate: true }
  )

  return {
    languages,
    isMultiLanguage,
    loading,
  }
}
