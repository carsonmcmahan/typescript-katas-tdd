type Person = { name: string; age: number };

export function grouper(people: Array<Person>): Record<number, string[]> {
  return people.reduce(
    (acc, person) => {
      if (acc[person.age] === undefined) {
        acc[person.age] = [];
      }

      acc[person.age].push(person.name);
      return acc;
    },
    {} as Record<number, string[]>,
  );
}
