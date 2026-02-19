export function fruitCounter(fruits: Array<string>): Record<string, number> {
  const res: Record<string, number> = {};

  fruits.forEach((fruit) => {
    if (res[fruit] === undefined) {
      res[fruit] = 0;
    }

    res[fruit]++;
  });

  return res;
}
