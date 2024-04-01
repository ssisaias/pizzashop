import { api } from '@/lib/axios'

interface GetOrdersResonse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: { pageIndex: number; perPage: number; totalCounter: number }
}

export async function getOrders() {
  const response = await api.get<GetOrdersResonse>('/orders', {
    params: {
      pageIndex: 0,
    },
  })
  return response.data
}
