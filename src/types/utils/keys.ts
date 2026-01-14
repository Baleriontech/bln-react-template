export type StringKeys<T> = Extract<keyof T, string>

export type ReplaceKeysWith<T, K extends keyof T, V> = Omit<T, K> & { [P in K]: V }

export type Path<T> = T extends object ? {
  [K in keyof T & string] : K  | `${K}.${Path<T[K]>}`
}[keyof T & string]: never
