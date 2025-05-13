import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import petQueryKey from './petQueryKey'
import type { Pet } from '@/types/models/Pet'
import type { ListAllPetsResponse } from '@/types/responses/petResponse'
import { mapPetResponseToModel } from '@/services/mappers/responses/petResponseMapper'

const useAllPets = () => {
  return useQuery({
    queryKey: petQueryKey.all,
    queryFn: async (): Promise<Array<Pet>> => {
      try {
        const response = await axios.get<ListAllPetsResponse>(
          'https://681dcbeec1c291fa6631b60d.mockapi.io/api/v1/pets',
        )

        const pets = response.data.map((pet) => mapPetResponseToModel(pet))

        return pets
      } catch (error) {
        console.error('Error fetching pets:', error)
        throw new Error('Failed to fetch pets')
      }
    },
  })
}

export default useAllPets
