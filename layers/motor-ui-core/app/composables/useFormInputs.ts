import type { Component } from 'vue'

export function useFormInputs() {
  const inputs = useState<Record<string, Component>>('form-inputs', () => ({}))

  function register(name: string, component: Component): void {
    inputs.value[name] = component
  }

  function get(name: string): Component | undefined {
    return inputs.value[name]
  }

  function has(name: string): boolean {
    return name in inputs.value
  }

  function getAll(): Map<string, Component> {
    return new Map(Object.entries(inputs.value))
  }

  return {
    register,
    get,
    has,
    getAll
  }
}
