import bffAxios from '@/lib/axios/bffAxiosConfig'
import { mapCreatePetSchemaToRequest } from '@/services/mappers/requests/petRequestMapper'
import type { TCreatePet } from '@/utils/validations/petValidation'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import petQueryKey from './petQueryKey'

const useCreatePet = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newPet: TCreatePet) => {
      const request = mapCreatePetSchemaToRequest(newPet)

      const response = await bffAxios.post('/api/v1/pets', request)

      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: petQueryKey.all,
      })
    },
  })
}

export default useCreatePet
