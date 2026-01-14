import { mapTo } from "@/services/mappers/utils/mapper"
import type { Dayjs } from '@/lib/dayjs'
import dayjs from '@/lib/dayjs'

export const strToDayjs = (str: string): Dayjs => {
  const parsed = dayjs(str)
  if (!parsed.isValid()) {
    throw (`Err: Invalid strToDayjs : ${str}`)
  }
  return dayjs(str)
}

export const mapToDayjs =
  <T, U extends readonly (keyof T)[], V extends Omit<T, U[number]> & { [K in U[number]]: Dayjs }>
    (obj: T, keys: U) => mapTo<Dayjs, T, U, V>({
      obj, keys, tranformeFn:
        value => dayjs.isDayjs(value)
          ? value
          : strToDayjs(String(value))
    })


