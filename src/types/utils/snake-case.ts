export type SnakeCase<S extends string> =
  S extends `${infer A}${infer B}${infer Rest}`
  ? A extends Lowercase<A>
  ? `${A}${SnakeCase<`${B}${Rest}`>}`
  : B extends Lowercase<B>
  ? `_${Lowercase<A>}${SnakeCase<`${B}${Rest}`>}`
  : `${Lowercase<A>}${SnakeCase<`${B}${Rest}`>}`
  : Lowercase<S>;

export type SnakeCaseKey<K extends PropertyKey> = K extends string ? SnakeCase<K> : K;

export type SnakeCaseDeep<T> =
  T extends readonly (infer U)[]
  ? SnakeCaseDeep<U>[]
  : T extends object
  ? {
    [K in keyof T as SnakeCaseKey<K>]:
    SnakeCaseDeep<T[K]>
  }
  : T;
