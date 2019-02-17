import getLatticeCoordinatesFor from 'zero-indexed-ulam-spiral/getLatticeCoordinatesFor'

export default (center, grid) => (i) => {
  const latticeCoordinates = getLatticeCoordinatesFor(i)

  return [center[0] + (latticeCoordinates[0] * grid) - (grid), center[1] + (latticeCoordinates[1] * grid) - (grid)]
}
