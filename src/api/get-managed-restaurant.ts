import { api } from '@/lib/axios'

interface GetManagedRestaurant {
  id: string
  name: string
  description: string | null
  managerId: string | null
  createAt: Date | null
  updatedAt: Date | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurant>('/managed-restaurant')

  return response.data
}
