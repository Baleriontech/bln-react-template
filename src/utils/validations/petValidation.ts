import { z } from 'zod'

export const CreatePetSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  dateOfBirth: z
    .date()
    .min(new Date(0), { message: 'Date of birth is required' }),
})

export type CreatePetType = z.infer<typeof CreatePetSchema>