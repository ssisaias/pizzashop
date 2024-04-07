import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/04/2024', receipt: 100 },
    { date: '02/04/2024', receipt: 200 },
    { date: '03/04/2024', receipt: 300 },
    { date: '03/04/2024', receipt: 15 },
  ])
})
