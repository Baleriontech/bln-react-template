import { Card, CardContent } from "@/components/ui/card";

export default function PetListSkeleton() {
  return (
    <div className="mt-2 grid grid-cols-6 gap-3">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Card className="animate-pulse" key={idx}>
          <CardContent>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
