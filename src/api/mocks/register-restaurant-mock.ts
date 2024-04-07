import { http, HttpResponse } from 'msw'

import { RegisterRestaurantBody } from '../register'

export const registerRestaurantsMock = http.post<never, RegisterRestaurantBody>(
  '/restaurants',
  async ({ request }) => {
    const { restaurantName } = await request.json()

    if (restaurantName === 'pizza shop') {
      return new HttpResponse(null, {
        status: 201,
      })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
