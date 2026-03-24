import { shallowReactive } from 'vue'
import type { Component } from 'vue'

const rendererRegistry = shallowReactive<Record<string, Component>>({})

export function registerGridRenderers(renderers: Record<string, Component>) {
  Object.assign(rendererRegistry, renderers)
}

export function useGridRenderers() {
  function register(name: string, component: Component): void {
    rendererRegistry[name] = component
  }

  function get(name: string): Component | undefined {
    return rendererRegistry[name]
  }

  function has(name: string): boolean {
    return name in rendererRegistry
  }

  function getAll(): Map<string, Component> {
    return new Map(Object.entries(rendererRegistry))
  }

  return { register, get, has, getAll }
}
