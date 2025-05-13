import type { Pet } from "@/types/models/Pet";
import type { PetResponse } from "@/types/responses/petResponse";

export const mapPetResponseToModel = (petResponse: PetResponse): Pet => {
  return {
    id: petResponse.id,
    name: petResponse.name,
    dateOfBirth: new Date(petResponse.date_of_birth),
    createdAt: new Date(petResponse.created_at),
  };
}

export const mapListAllPetsResponseToModel = (
  petsResponse: Array<PetResponse>
): Array<Pet> => {
  return petsResponse.map((pet) => mapPetResponseToModel(pet));
};

