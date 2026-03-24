// AI-generated — review before merging
import { describe, expect, it } from 'vitest'
import { reactive, nextTick } from 'vue'
import { useSlugField } from '../../app/composables/useSlugField'

describe('useSlugField', () => {
  it('slugField-auto-generates', async () => {
    const state = reactive<Record<string, unknown>>({ name: '', slug: '' })
    useSlugField(state)
    state.name = 'Hello World'
    await nextTick()
    expect(state.slug).toBe('hello-world')
  })

  it('slugField-stops-after-touch', async () => {
    const state = reactive<Record<string, unknown>>({ name: '', slug: '' })
    const { markSlugTouched } = useSlugField(state)
    state.name = 'First'
    await nextTick()
    expect(state.slug).toBe('first')
    markSlugTouched()
    state.name = 'Second'
    await nextTick()
    expect(state.slug).toBe('first')
  })

  it('slugField-custom-keys', async () => {
    const state = reactive<Record<string, unknown>>({ title: '', url_slug: '' })
    useSlugField(state, { sourceKey: 'title', targetKey: 'url_slug' })
    state.title = 'My Page Title'
    await nextTick()
    expect(state.url_slug).toBe('my-page-title')
  })

  it('slugField-handles-empty-source', async () => {
    const state = reactive<Record<string, unknown>>({ name: '', slug: '' })
    useSlugField(state)
    state.name = ''
    await nextTick()
    expect(state.slug).toBe('')
  })
})
