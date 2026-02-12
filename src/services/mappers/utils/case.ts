

export const snakeToCamel = (str: string) =>
  str.replace(/_([a-z])/g, (_, c) => c.toUpperCase())

export const mapToCamelCase = <TModel>(obj: object): TModel => {
  const transformKey: TModel = {} as TModel
  for (const [key, value] of Object.entries(obj)) {
     transformKey[snakeToCamel(key) as keyof TModel] = value
  }
  return transformKey
}

