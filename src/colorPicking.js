import getFibonacci from './getFibonacci'
import getTriangularRootIndex from 'triangular-numbers/getTriangularRootIndex'

const palette = [
  'rgb(19, 107, 251)',
  'rgb(252, 107, 33)',
  'rgb(252, 36, 226)',
  'rgb(28, 165, 252)',
  'rgb(253, 183, 43)',
  'rgb(252, 19, 109)',
  // 'rgb(0, 0, 0)'
]

export const roundRobin = i => palette[i % palette.length]

export const upToFibonacci = i => {}

export const upToTriangular = i => palette[getTriangularRootIndex(i) % palette.length]
