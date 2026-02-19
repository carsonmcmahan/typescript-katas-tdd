export function calculator(calculation: string): number {
  const parts = calculation.split(" ");
  let total = Number(parts[0]);

  // start at 1 then jump two positions afterwards
  for (let i = 1; i < parts.length; i += 2) {
    const operator = parts[i];
    const nextNumber = Number(parts[i + 1]);

    switch (operator) {
      case "+":
        total += nextNumber;
        break;
      case "-":
        total -= nextNumber;
        break;
    }
  }

  return total;
}
