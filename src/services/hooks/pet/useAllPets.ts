import { mapListAllPetsResponseToModel } from '@/services/mappers/responses/petResponseMapper'
import type { Pet } from '@/types/models/Pet'
import { useQuery } from '@tanstack/react-query'
import petQueryKey from './petQueryKey'
import type { TListAllPetsResponse } from '@/types/responses/petResponse'

const useAllPets = () => {
  return useQuery({
    queryKey: petQueryKey.all,
    queryFn: async (): Promise<Array<Pet>> => {
      try {
        // const response = await bffAxios.get<TListAllPetsResponse>('/api/v1/pets')
        // mock
        const response = {
          data: [
          {
            id: '1',
            name: 'Cat',
            price: '10.00',
            date_of_birth: '2025-12-04T16:00:00.000Z',
            created_at: '2025-04-04T16:00:00.000Z'
          },
          {
            id: '2',
            name: 'Dog',
            price: '10.0005',
            date_of_birth: '2025-10-04T16:00:00.000Z',
            created_at: '2025-04-04T16:00:00.000Z'
          },
        ] as  TListAllPetsResponse
        }
        return mapListAllPetsResponseToModel(response.data)
      } catch (error) {
        console.error('Error fetching pets:', error)
        throw new Error('Failed to fetch pets')
      }
    },
  })
}

export default useAllPets
