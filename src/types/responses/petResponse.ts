export type TPetResponse = {
  id: string
  name: string
  price: string
  date_of_birth: string
  created_at: string
}

export type TListAllPetsResponse = Array<TPetResponse>
