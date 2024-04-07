import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'pizza', amount: 2 },
    { product: 'burger', amount: 1 },
    { product: 'hotdog', amount: 3 },
  ])
})
