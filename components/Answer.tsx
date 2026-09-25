import type { ReactNode } from 'react'

export function Answer({ children }: { children: ReactNode }) {
  return (
    <details className="interview-answer">
      <summary>Показать ответ</summary>
      <div className="interview-answer__body">{children}</div>
    </details>
  )
}
