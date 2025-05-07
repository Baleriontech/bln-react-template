import { createFileRoute } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-adapter'
import { z } from 'zod'

const searchParamsSchema = z.object({
  page: z.number().default(1),
  limit: z.number().default(20),
})

export const Route = createFileRoute('/with-search-params/')({
  component: WithSearchParamsPage,
  validateSearch: zodValidator(searchParamsSchema),
})

function WithSearchParamsPage() {
  const { page, limit } = Route.useSearch()
  return (
    <>
      <div>A: {page}</div>
      <div>B: {limit}</div>
    </>
  )
}
