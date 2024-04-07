import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailResponse,
  GetOrderDetailsParams,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Joao Doe',
      email: 'example@email.com',
      phone: '321321321',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: '1',
        product: { name: 'pizza super peperoni' },
        quantity: 1,
        priceInCents: 2000,
      },
      {
        id: '2',
        product: { name: 'super suco' },
        quantity: 1,
        priceInCents: 1000,
      },
    ],
    totalInCents: 3000,
  })
})
