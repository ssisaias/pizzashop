import { http, HttpResponse } from 'msw'

import { GetDayOrdersAmountResponse } from '../get-day-orders-amount'

export const getDailyOrderAmountMock = http.get<
  never,
  never,
  GetDayOrdersAmountResponse
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})
