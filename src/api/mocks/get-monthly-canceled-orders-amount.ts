import { http, HttpResponse } from 'msw'

import { GetMonthlyCanceledOrdersAmountResponse } from '../get-monthly-canceled-orders-amount'

export const getMonthlyCanceledOrderAmountMock = http.get<
  never,
  never,
  GetMonthlyCanceledOrdersAmountResponse
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -5,
  })
})
