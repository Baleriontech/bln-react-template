import type { Pet } from "@/types/models/Pet"
import type { ApiSerializeAuto } from "@/types/utils/api"

export type TPetResponse = ApiSerializeAuto<Pet>

export type TListAllPetsResponse = Array<TPetResponse>
