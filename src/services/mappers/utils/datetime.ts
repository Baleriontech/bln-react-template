import { mapTo } from "@/services/mappers/utils/mapper"
import type { CustomDayjs } from '@/lib/dayjs'
import { customDayjs } from '@/lib/dayjs'

export const strToDayjs = (str: string): CustomDayjs => {
  const parsed = customDayjs(str)
  if (!parsed.isValid()) {
    throw (`Err: Invalid strToDayjs : ${str}`)
  }
  return customDayjs(str)
}

export const mapToDayjs =
  <T, U extends readonly (keyof T)[], V extends Omit<T, U[number]> & { [K in U[number]]: CustomDayjs }>
    (obj: T, keys: U) => mapTo<CustomDayjs, T, U, V>({
      obj, keys, tranformeFn:
        value => customDayjs.isDayjs(value)
          ? value
          : strToDayjs(String(value))
    })


