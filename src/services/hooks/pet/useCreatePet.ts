import { mapCreatePetSchemaToRequest } from '@/services/mappers/requests/petRequestMapper'
import type { TCreatePet } from '@/utils/validations/petValidation'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import petQueryKey from './petQueryKey'

const useCreatePet = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newPet: TCreatePet) => {
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
