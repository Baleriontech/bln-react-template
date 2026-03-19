import type { PriceDecimal } from "@/lib/decimal"
import type { Dayjs } from '@/lib/dayjs'

export interface Pet {
  id: string
  name: string
  price: PriceDecimal
  dateOfBirth: Dayjs
  createdAt: Dayjs
}
