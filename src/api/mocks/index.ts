import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'
import { getDailyOrderAmountMock } from './get-daily-orders-amount'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { getMonthlyCanceledOrderAmountMock } from './get-monthly-canceled-orders-amount'
import { getMonthlyRevenueMock } from './get-monthly-revenue'
import { getMonthlyOrderAmountMock } from './get-montly-orders-amount'
import { getOrderDetailsMock } from './get-order-details-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getProfileMock } from './get-profile-mock'
import { registerRestaurantsMock } from './register-restaurant-mock'
import { signinMock } from './signin-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
  signinMock,
  registerRestaurantsMock,
  getDailyOrderAmountMock,
  getMonthlyOrderAmountMock,
  getMonthlyCanceledOrderAmountMock,
  getMonthlyRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMSW() {
  if (env.VITE_MODE !== 'test') {
    return
  }
  await worker.start()
}
