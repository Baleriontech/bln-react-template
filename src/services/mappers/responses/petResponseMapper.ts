import type { Pet } from '@/types/models/Pet'
import type { TPetResponse } from '@/types/responses/petResponse'

export const mapPetResponseToModel = (petResponse: TPetResponse): Pet => {
  return {
    id: petResponse.id,
    name: petResponse.name,
    dateOfBirth: new Date(petResponse.date_of_birth),
    createdAt: new Date(petResponse.created_at),
  }
}

export const mapListAllPetsResponseToModel = (
  petsResponse: Array<TPetResponse>,
): Array<Pet> => {
  return petsResponse.map((pet) => mapPetResponseToModel(pet))
}
