import { useMutation, useQueryClient } from '@tanstack/react-query'
import petQueryKey from './petQueryKey'
import type { TPetResponse } from '@/types/responses/petResponse'
import type { TCreatePet } from '@/utils/validations/petValidation'
import bffAxios from '@/lib/axios/bffAxiosConfig'
import { mapCreatePetSchemaToRequest } from '@/services/mappers/requests/petRequestMapper'
import { mapPetResponseToModel } from '@/services/mappers/responses/petResponseMapper'

const useCreatePet = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newPet: TCreatePet) => {
      try {
        const request = mapCreatePetSchemaToRequest(newPet)

        const response = await bffAxios.post<TPetResponse>('/api/v1/pets', request)

        return mapPetResponseToModel(response.data)
      } catch (error) {
        console.error('Error creating pet:', error)
        throw new Error('Failed to create pet')
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: petQueryKey.all,
      })
    },
  })
}

export default useCreatePet
