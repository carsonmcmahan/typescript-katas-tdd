type Person = { name: string; age: number };

export function grouper(people: Array<Person>): Record<number, string[]> {
  const res: Record<number, string[]> = {};

  people.forEach((person) => {
    if (res[person.age] === undefined) {
      res[person.age] = [];
    }

    res[person.age].push(person.name);
  });

  return res;
}
