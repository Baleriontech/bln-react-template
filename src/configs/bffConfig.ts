export const bffConfig: Readonly<{
  BFF_BASE_API_URL: string
}> = {
  BFF_BASE_API_URL:
    import.meta.env.VITE_BFF_BASE_API_URL ?? 'BASE_API_URL NOT FOUND',
} as const

export default bffConfig
