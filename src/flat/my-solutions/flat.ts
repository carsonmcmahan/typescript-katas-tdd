export function flat<T>(...arrays: T[][]): T[] {
  return Array<T>().concat(...arrays);
}
