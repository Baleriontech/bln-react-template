export type TPetResponse = {
  id: string
  name: string
  date_of_birth: Date
  created_at: Date
}

export type TListAllPetsResponse = Array<TPetResponse>
