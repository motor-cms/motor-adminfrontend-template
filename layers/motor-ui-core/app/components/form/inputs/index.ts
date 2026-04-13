import TextInput from './TextInput.vue'
import EmailInput from './EmailInput.vue'
import PasswordInput from './PasswordInput.vue'
import NumberInput from './NumberInput.vue'
import TextareaInput from './TextareaInput.vue'
import SelectInput from './SelectInput.vue'
import MultiSelectInput from './MultiSelectInput.vue'
import ToggleInput from './ToggleInput.vue'
import CheckboxGroupInput from './CheckboxGroupInput.vue'
import GroupedCheckboxInput from './GroupedCheckboxInput.vue'
import TagsInput from './TagsInput.vue'
import SlugInput from './SlugInput.vue'

export const builtInInputs: Record<string, typeof TextInput> = {
  'text': TextInput,
  'url': TextInput,
  'email': EmailInput,
  'password': PasswordInput,
  'number': NumberInput,
  'textarea': TextareaInput,
  'select': SelectInput,
  'search-select': SelectInput,
  'multi-select': MultiSelectInput,
  'toggle': ToggleInput,
  'checkbox-group': CheckboxGroupInput,
  'grouped-checkbox': GroupedCheckboxInput,
  'tags': TagsInput,
  'slug': SlugInput
}

export {
  TextInput,
  EmailInput,
  PasswordInput,
  NumberInput,
  TextareaInput,
  SelectInput,
  MultiSelectInput,
  ToggleInput,
  CheckboxGroupInput,
  GroupedCheckboxInput,
  TagsInput,
  SlugInput
}
