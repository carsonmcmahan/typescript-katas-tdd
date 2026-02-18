export function highestNumber(numbers: number[]) {
  let highestNum = numbers[0];

  for (let number of numbers) {
    if (number > highestNum) {
      highestNum = number;
    }
  }

  return highestNum;
}
