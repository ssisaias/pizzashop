import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { signinMock } from './signin-mock'

export const worker = setupWorker(signinMock)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
