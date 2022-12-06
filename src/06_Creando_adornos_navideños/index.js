export function createCube(size) {
  const getCubePart = (front, side) =>
    Array.from({ length: size }, (_, i) => ' '.repeat(size - (i - 1)) + front.repeat(i + 1) + side.repeat(size))
  return [...getCubePart('/\\', '_\\'), ...getCubePart('\\/', '_/').reverse()].join('\n')
}
