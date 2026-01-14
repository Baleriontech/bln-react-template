import { PriceDecimal } from "@/lib/decimal";
import { mapTo } from "@/services/mappers/utils/mapper";



export const strToPriceDecimal = (str: string): PriceDecimal => {
  const parsed = PriceDecimal(str)
  if (!PriceDecimal.isDecimal(parsed)) {
    throw(`Err: Invalid strToPriceDecimal : ${str}`)
  }
  return PriceDecimal(str)
}

export const mapToPriceDecimal = <T, U extends readonly (keyof T)[],  V extends Omit<T, U[number]> & { [K in U[number]]: PriceDecimal }>(obj: T, keys: U) => mapTo<PriceDecimal, T, U, V>({
  obj, keys, tranformeFn:
    value => PriceDecimal.isDecimal(value) ? value : strToPriceDecimal(String(value))
})


