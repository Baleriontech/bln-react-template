import PetListSkeleton from '@/components/pet/PetListSkeleton'
import { Card, CardContent } from '@/components/ui/card'
import useAllPets from '@/services/hooks/pet/useAllPets'

export default function PetsList() {
  const { data: pets, isPending, error } = useAllPets()

  if (isPending) return <PetListSkeleton />

  if (error) return <div>Error loading pets: {error.message}</div>

  return (
    <div className="mt-2 grid grid-cols-6 gap-3">
      {pets.map((pet) => (
        <Card key={pet.id}>
          <CardContent>
            <h2 className="text-xl font-bold">{pet.name}</h2>
            <p>Date of Birth: {new Date(pet.dateOfBirth).toLocaleDateString()}</p>
            <p>Created At: {new Date(pet.createdAt).toLocaleString()}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
