import { toKebabCase } from '../utils/strings'

interface UseSlugFieldOptions {
  sourceKey?: string
  targetKey?: string
}

export function useSlugField(
  state: Record<string, unknown>,
  options?: UseSlugFieldOptions
) {
  const { sourceKey = 'name', targetKey = 'slug' } = options ?? {}
  const slugTouched = ref(false)

  watch(() => state[sourceKey], (newValue) => {
    if (!slugTouched.value && typeof newValue === 'string') {
      state[targetKey] = toKebabCase(newValue)
    }
  })

  function markSlugTouched() {
    slugTouched.value = true
  }

  return { slugTouched, markSlugTouched }
}
