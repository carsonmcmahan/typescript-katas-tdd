export function forEach<T>(values: T[], callBack: (element: T) => void) {
  for (let i = 0; i < values.length; i++) {
    callBack(values[i]);
  }
}
