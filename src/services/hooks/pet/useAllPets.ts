import bffAxios from '@/lib/axios/bffAxiosConfig'
import { mapPetResponseToModel } from '@/services/mappers/responses/petResponseMapper'
import type { Pet } from '@/types/models/Pet'
import type { TListAllPetsResponse } from '@/types/responses/petResponse'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import petQueryKey from './petQueryKey'

const useAllPets = () => {
  return useQuery({
    queryKey: petQueryKey.all,
    queryFn: async (): Promise<Array<Pet>> => {
      try {
        const response =
          await bffAxios.get<TListAllPetsResponse>('/api/v1/pets')

        const pets = response.data.map((pet) => mapPetResponseToModel(pet))
        axios
        return pets
      } catch (error) {
        console.error('Error fetching pets:', error)
        throw new Error('Failed to fetch pets')
      }
    },
  })
}

export default useAllPets
