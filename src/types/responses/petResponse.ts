export type PetResponse = {
  id: string
  name: string
  date_of_birth: Date
  created_at: Date
}

export type ListAllPetsResponse = Array<PetResponse>
