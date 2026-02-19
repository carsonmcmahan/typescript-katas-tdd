export function range(initial: number, ending?: number): Array<number> {
  const res: number[] = [];

  let start;
  let end;

  /*
    First check if ending is defined.
    If its not we know our start will be 0.
    If ending is defined, we take the 
    min and max of initial and ending.
  */
  if (ending === undefined) {
    start = Math.min(0, initial);
    end = Math.max(0, initial);
  } else {
    start = Math.min(initial, ending);
    end = Math.max(initial, ending);
  }

  while (start <= end) {
    res.push(start);
    start++;
  }

  return res;
}
