import { Link, useRouteError } from 'react-router-dom'

export function ErrorPage() {
  const error = useRouteError() as Error
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="text-accent-foreground">An unknown error occurred</p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p>
        Go back{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          home
        </Link>
      </p>
    </div>
  )
}
