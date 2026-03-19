import { mapToCamelCase } from "@/services/mappers/utils/case"
import { mapToDayjs } from "@/services/mappers/utils/datetime"
import { mapToPriceDecimal } from "@/services/mappers/utils/decimal"

export const mapTo = <
  CustomType,
  T,
  ChangeKeys extends readonly (keyof T)[],
  Transformed extends Omit<T, ChangeKeys[number]> & { [K in ChangeKeys[number]]: CustomType }
>({ obj, keys, tranformeFn }: {
  obj: T,
  keys?: ChangeKeys,
  tranformeFn: (value: Transformed[keyof T]) => CustomType
}): Transformed => {
  let transformed = { ...obj } as unknown as Transformed
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
