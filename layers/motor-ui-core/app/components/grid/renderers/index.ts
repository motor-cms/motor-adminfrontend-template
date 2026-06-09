import type { Component } from 'vue'
import TextRenderer from './TextRenderer.vue'
import NumberRenderer from './NumberRenderer.vue'
import BooleanRenderer from './BooleanRenderer.vue'
import DateRenderer from './DateRenderer.vue'
import LinkRenderer from './LinkRenderer.vue'
import ListRenderer from './ListRenderer.vue'
import BadgeRenderer from './BadgeRenderer.vue'
import AvatarRenderer from './AvatarRenderer.vue'
import IndentedTextRenderer from './IndentedTextRenderer.vue'
import TagsRenderer from './TagsRenderer.vue'
import EnumRenderer from './EnumRenderer.vue'

export const coreRenderers: Record<string, Component> = {
  'text': TextRenderer,
  'number': NumberRenderer,
  'boolean': BooleanRenderer,
  'date': DateRenderer,
  'link': LinkRenderer,
  'list': ListRenderer,
  'badge': BadgeRenderer,
  'avatar': AvatarRenderer,
  'indented-text': IndentedTextRenderer,
  'tags': TagsRenderer,
  'enum': EnumRenderer,
}

export {
  TextRenderer,
  NumberRenderer,
  BooleanRenderer,
  DateRenderer,
  LinkRenderer,
  ListRenderer,
  BadgeRenderer,
  AvatarRenderer,
  IndentedTextRenderer,
  TagsRenderer,
  EnumRenderer,
}
