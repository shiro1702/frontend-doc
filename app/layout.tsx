import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'
import { PagefindBasePath } from '../components/PagefindBasePath'
import 'nextra-theme-docs/style.css'
import './answers.css'

export const metadata = {
  title: {
    default: 'Frontend Interview',
    template: '%s — Frontend Interview',
  },
  description:
    'Вопросы и разборы для подготовки к собеседованию на frontend middle и senior: JavaScript, CSS, TypeScript, Vue и лайвкодинг.',
}

const navbar = (
  <Navbar logo={<b>Frontend Interview</b>} />
)

const footer = (
  <Footer>
    Подготовка к собеседованию frontend-разработчика, middle и senior.
  </Footer>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <PagefindBasePath />
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
