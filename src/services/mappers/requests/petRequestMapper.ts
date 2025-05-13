import type { CreatePetRequestType } from "@/types/requests/petRequest";
import type { CreatePetType } from "@/utils/validations/petValidation";

export const mapCreatePetSchemaToRequest = (pet: CreatePetType): CreatePetRequestType => {
  return {
    name: pet.name,
    date_of_birth: pet.dateOfBirth,
  }
}