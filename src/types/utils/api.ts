import type { Dayjs } from "dayjs"
import type { PriceDecimal } from "@/lib/decimal"
import type { ReplaceKeysWith, StringKeys } from "@/types/utils/keys"
import type { SnakeCase, SnakeCaseDeep } from "@/types/utils/snake-case"


export type ApiSerializedType = PriceDecimal | Dayjs

export type ApiSerializeShape<Model, K extends keyof SnakeCaseDeep<Model>, T= string> = ReplaceKeysWith<SnakeCaseDeep<Model>, K, T>

type AutoSerializedKeys<Model> = Extract<
  {
    [K in StringKeys<Model>]:
      Extract<Model[K], ApiSerializedType> extends never
        ? never
        : SnakeCase<K>
  }[StringKeys<Model>],
  keyof SnakeCaseDeep<Model>
>

export type ApiSerializeAuto<Model, T = string> =
  ReplaceKeysWith<
    SnakeCaseDeep<Model>,
    AutoSerializedKeys<Model>,
    T
  >
