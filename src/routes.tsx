import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/404'
import { Dashboard } from './pages/app/Dashboard/dashboard'
import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/signin'
import { SignUp } from './pages/auth/signup'
import { ErrorPage } from './pages/error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/signin', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
])
