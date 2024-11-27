export function groupBy<T>(collection: T[], key: keyof T) {
  const groupedResult = collection.reduce((previous, current) => {
    if (!previous[current[key]]) {
      previous[current[key]] = [] as T[]
    }

    previous[current[key]].push(current)
    return previous
  }, {} as any)
  return groupedResult
}
