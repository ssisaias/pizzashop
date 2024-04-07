import { http, HttpResponse } from 'msw'

import { GetMonthlyOrdersAmountResponse } from '../get-monthly-orders-amount'

export const getMonthlyOrderAmountMock = http.get<
  never,
  never,
  GetMonthlyOrdersAmountResponse
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 7,
  })
})
