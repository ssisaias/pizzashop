import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyOrderAmountMock } from './get-daily-orders-amount'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getMonthlyCanceledOrderAmountMock } from './get-monthly-canceled-orders-amount'
import { getMonthlyRevenueMock } from './get-monthly-revenue'
import { getMonthlyOrderAmountMock } from './get-montly-orders-amount'
import { getPopularProductsMock } from './get-popular-products-mock'
import { registerRestaurantsMock } from './register-restaurant-mock'
import { signinMock } from './signin-mock'

export const worker = setupWorker(
  signinMock,
  registerRestaurantsMock,
  getDailyOrderAmountMock,
  getMonthlyOrderAmountMock,
  getMonthlyCanceledOrderAmountMock,
  getMonthlyRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
