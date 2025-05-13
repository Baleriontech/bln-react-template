import { createFileRoute } from '@tanstack/react-router'
import type { TCreatePet } from '@/utils/validations/petValidation'
import CreatePetForm from '@/components/pet/CreatePetForm'
import PetsList from '@/components/pet/PetsList'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import useCreatePet from '@/services/hooks/pet/useCreatePet'

export const Route = createFileRoute('/pets/')({
  component: PetsPage,
})

function PetsPage() {
  const { mutateAsync, isPending } = useCreatePet()
  const onSubmit = async (data: TCreatePet) => {
    try {
      await mutateAsync(data)
    } catch (error) {
      console.error('Error creating pet:', error)
    }
  }

  return (
    <div className="p-4">
      <div className="flex flex-col  w-full h-full">
        <Card>
          <CardHeader>
            <CardTitle>Create new pet</CardTitle>
          </CardHeader>
          <CardContent>
            <CreatePetForm onSubmit={onSubmit} isLoading={isPending} />
          </CardContent>
        </Card>
      </div>
      <PetsList />
    </div>
  )
}
