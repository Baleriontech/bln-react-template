import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import petQueryKey from './petQueryKey'
import type { CreatePetType } from '@/utils/validations/petValidation'
import { mapCreatePetSchemaToRequest } from '@/services/mappers/requests/petRequestMapper'

const useCreatePet = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newPet: CreatePetType) => {
      const request = mapCreatePetSchemaToRequest(newPet)

      const response = await axios.post(
        'https://681dcbeec1c291fa6631b60d.mockapi.io/api/v1/pets',
        request,
      )

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
