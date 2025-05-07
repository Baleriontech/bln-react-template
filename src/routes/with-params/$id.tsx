import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/with-params/$id')({
  component: WithParamPage,
})

function WithParamPage() {
  const { id } = Route.useParams()
  return <div>ID Param: {id}</div>
}
