import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-id',
    name: 'Pizza Shop (Preview)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    managerId: 'custom-user-id',
    createAt: new Date(),
    updatedAt: new Date(),
  })
})
