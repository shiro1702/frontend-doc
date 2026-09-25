import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import { Callout, Cards } from 'nextra/components'
import { Answer } from './components/Answer'

const themeComponents = getThemeComponents()

export function useMDXComponents(components?: Record<string, unknown>) {
  return {
    ...themeComponents,
    Callout,
    Cards,
    Answer,
    ...components,
  }
}
