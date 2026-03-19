import type { Pet } from '@/types/models/Pet'
import type { TPetResponse } from '@/types/responses/petResponse'
import { mapToModel } from '@/services/mappers/utils/mapper'

export const mapPetResponseToModel = (petResponse: TPetResponse): Pet => {
  return mapToModel<Pet>(
    petResponse,
    {
     PriceDecimal: ['price'] ,
     Dayjs: ['createdAt', 'dateOfBirth']
    }
  )
}

export const mapListAllPetsResponseToModel = (petsResponse: Array<TPetResponse>): Array<Pet> => {
  return petsResponse.map((pet) => mapPetResponseToModel(pet))
}
