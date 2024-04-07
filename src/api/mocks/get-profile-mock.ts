import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: '123',
      name: 'zeteste@test.com',
      email: 'johnn.doe@example.com',
      createAt: new Date(),
      phone: '1234567890',
      role: 'manager',
      updatedAt: new Date(),
    })
  },
)
