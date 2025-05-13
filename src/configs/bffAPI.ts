export const config = {
  BASE_API_URL: import.meta.env.VITE_BASE_API_URL ?? 'BASE_API_URL NOT FOUND',
} as const

export default config
