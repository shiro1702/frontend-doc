import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
})

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default withNextra({
  agentRules: false,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.tsx',
    },
  },
})
