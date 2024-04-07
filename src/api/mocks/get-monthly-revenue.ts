import { http, HttpResponse } from 'msw'

import { GetMonthlyRevenueAmountResponse } from '../get-monthly-revenue'

export const getMonthlyRevenueMock = http.get<
  never,
  never,
  GetMonthlyRevenueAmountResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 10,
    diffFromLastMonth: 2,
  })
})
