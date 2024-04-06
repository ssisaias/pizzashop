import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,

  withCredentials: true, // if this does not work, try checking the website security config directly on the browser (cookies should be allowed)
})

// Throttling: just comment / uncomment
/* api.interceptors.request.use(async (config) => {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.round(Math.random() * 3155)),
  )
  return config
}) */
