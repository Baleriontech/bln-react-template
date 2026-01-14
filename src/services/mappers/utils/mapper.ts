import { mapToCamelCase } from "@/services/mappers/utils/case"
import { mapToDayjs } from "@/services/mappers/utils/datetime"
import { mapToPriceDecimal } from "@/services/mappers/utils/decimal"

export const mapTo = <
  CustomType,
  T,
  U extends readonly (keyof T)[],
  V extends Omit<T, U[number]> & { [K in U[number]]: CustomType }
>({ obj, keys, tranformeFn }: {
  obj: T,
  keys?: U,
  tranformeFn: (value: V[keyof T]) => CustomType
}): V => {
  let transformed = { ...obj } as unknown as V
  keys?.forEach((key) => {
    const value = transformed[key]
    transformed = {
      ...transformed,
      [key]: tranformeFn(value)
    }
  })
  return transformed
}

export const mapToModel = <
  Model
>(
  dto: object,
  config?: {
    PriceDecimal?: readonly (keyof Model)[],
    Dayjs?: readonly (keyof Model)[]
  }): Model => {
  return mapToPriceDecimal(
    mapToDayjs(
      mapToCamelCase<Model>(dto)
      , config?.Dayjs ?? [])
    , config?.PriceDecimal ?? []
  ) as Model
}


