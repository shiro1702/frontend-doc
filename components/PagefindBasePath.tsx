'use client'

import { useEffect } from 'react'

type Pagefind = {
  options?: (opts?: { baseUrl?: string }) => Promise<void>
  __basePathPatched?: boolean
}

declare global {
  interface Window {
    pagefind?: Pagefind
  }
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function PagefindBasePath() {
  useEffect(() => {
    if (!basePath || typeof window === 'undefined') return

    let current = window.pagefind

    const patch = (value: Pagefind | undefined) => {
      if (!value?.options || value.__basePathPatched) return value
      const original = value.options.bind(value)
      value.options = (opts = {}) => original({ ...opts, baseUrl: `${basePath}/` })
      value.__basePathPatched = true
      return value
    }

    Object.defineProperty(window, 'pagefind', {
      configurable: true,
      get() {
        return current
      },
      set(value) {
        current = patch(value)
      },
    })
  }, [])

  return null
}
