

export const snakeToCamel = (str: string) =>
  str.replace(/_([a-z])/g, (_, c) => c.toUpperCase())

export const mapToCamelCase = <Model>(obj: object): Model => {
  const transformKey: Model = {} as Model
  for (const [key, value] of Object.entries(obj)) {
     transformKey[snakeToCamel(key) as keyof Model] = value
  }
  return transformKey
}

