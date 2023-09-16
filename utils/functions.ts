export function range(start: number, end: number): number[] {
  const arr: number[] = []
  for (let i: number = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}
