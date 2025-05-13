import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  console.log(import.meta.env.VITE_API_URL);
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <div className="text-9xl">Balerion</div>
        <div className="grid gap-2 my-4">
          <Link
            to="/with-params/$id"
            params={{ id: '1' }}
            className="bg-white text-[#282c34] px-2 py-1 rounded-lg text-xl hover:bg-black hover:text-white transition-colors duration-300"
          >
            Page with Path Params
          </Link>
          <Link
            to="/with-search-params"
            search={{
              page: 1,
              limit: 20,
            }}
            className="bg-white text-[#282c34] px-2 py-1 rounded-lg text-xl hover:bg-black hover:text-white transition-colors duration-300"
          >
            Page with Search Params
          </Link>
          <Link
            to="/pets"
            className="bg-white text-[#282c34] px-2 py-1 rounded-lg text-xl hover:bg-black hover:text-white transition-colors duration-300"
          >
            Example with React Query
          </Link>
        </div>
      </header>
    </div>
  )
}
