import { api } from '@/lib/axios'

export interface GetMonthlyRevenueAmountResponse {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthlyRevenue() {
  const response = await api.get<GetMonthlyRevenueAmountResponse>(
    '/metrics/month-receipt',
  )
  return response.data
}
