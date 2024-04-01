import { api } from '@/lib/axios'

export interface CancelrderParams {
  orderId: string
}

export async function cancelOrder({ orderId }: CancelrderParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
