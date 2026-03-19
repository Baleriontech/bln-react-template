import PetListSkeleton from '@/components/pet/PetListSkeleton'
import { Card, CardContent } from '@/components/ui/card'
import { DateFormat } from '@/constants/dayjs'
import { PriceDecimal } from '@/lib/decimal'
import useAllPets from '@/services/hooks/pet/useAllPets'
import type { Pet } from '@/types/models/Pet'

export default function PetsList() {
  const { data: pets, isPending, error } = useAllPets()

  if (isPending) return <PetListSkeleton />

  if (error) return <div>Error loading pets: {error.message}</div>

  return (
    <div className="mt-2 grid grid-cols-3 gap-3">
      {pets.map((pet) => (
        <Card key={pet.id}>
          <PetCard { ...pet} />
        </Card>
      ))}
    </div>
  )
}

const PetCard: React.FC<Pet> = pet => {
  return (<>
    <CardContent>
      <h2 className="text-xl font-bold">{pet.name}</h2>
      <div className='flex flex-col gap-y-1'>
        <p>Spicie: </p>
        <p>Date of Birth: {pet.dateOfBirth.format(DateFormat['Date Space']).toString()}</p>
        <p>Price {pet.price.plus(PriceDecimal(0.025)).toDecimalPlaces(2).toString()} Bath</p>
        <p>Created At: {pet.createdAt.fromNow()}</p>
      </div>
    </CardContent>
  </>)
}
