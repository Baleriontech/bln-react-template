export type StringKeys<T> = Extract<keyof T, string>

export type ReplaceKeysWith<T, K extends keyof T, V> =
  Omit<T, K> & { [P in K]: V }
