import { PriceDecimal } from '@/lib/decimal'
import type { Pet } from '@/types/models/Pet'
import type { TPetResponse } from '@/types/responses/petResponse'
import dayjs from "@/lib/dayjs"
import type { ApiSerializeAuto } from '@/types/utils/api'

export const mapPetResponseToModel = (petResponse: ApiSerializeAuto<Pet>): Pet => {
  return {
    id: petResponse.id,
    name: petResponse.name,
    price: PriceDecimal(petResponse.price),
    dateOfBirth: dayjs(petResponse.date_of_birth),
    createdAt: dayjs(petResponse.created_at),
    // custom enum
  }
}

export const mapListAllPetsResponseToModel = (petsResponse: Array<TPetResponse>): Array<Pet> => {
  return petsResponse.map((pet) => mapPetResponseToModel(pet))
}
