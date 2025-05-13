import type { TCreatePetRequest } from '@/types/requests/petRequest'
import type { TCreatePet } from '@/utils/validations/petValidation'

export const mapCreatePetSchemaToRequest = (
  pet: TCreatePet,
): TCreatePetRequest => {
  return {
    name: pet.name,
    date_of_birth: pet.dateOfBirth,
  }
}
