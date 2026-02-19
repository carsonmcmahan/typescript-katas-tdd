export function alphabetical(strings: Array<string>): Array<string> {
  return strings.sort((a, b) => a.localeCompare(b));
}
