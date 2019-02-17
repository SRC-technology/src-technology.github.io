const shapes = [
  { type: 'rect' },
  { type: 'triangle', up: true, left: false },
  { type: 'triangle', up: false, left: true },
  { type: 'triangle', up: true, left: true },
  { type: 'triangle', up: false, left: false },
  { type: 'triangleBoundary', up: true, left: true },
  { type: 'empty' },
  { type: 'triangleBoundary', up: true, left: false },
  { type: 'triangleBoundary', up: false, left: true },
  { type: 'triangleBoundary', up: false, left: false },
]

const getBottomLeftSCorner = () => {
  const random = Math.random()

  if (random < 0.6) {
    return [shapes[0]]
  } else if (random < 0.8) {
    return [shapes[1]]
  } else {
    return [shapes[1], shapes[5]]
  }
}

const getCenterRightSCorner = () => {
  const random = Math.random()
  if (random < 0.6) {
    return [shapes[0]]
  } else if (random < 0.8) {
    return [shapes[3]]
  } else {
    return [shapes[3], shapes[7]]
  }
}

const getCenterLeftSCorner = () => {
  const random = Math.random()
  if (random < 0.6) {
    return [shapes[0]]
  } else if (random < 0.8) {
    return [shapes[4]]
  } else {
    return [shapes[4], shapes[8]]
  }
}

const getTopRightSCorner = () => {
  const random = Math.random()
  if (random < 0.6) {
    return [shapes[0]]
  } else if (random < 0.8) {
    return [shapes[2]]
  } else {
    return [shapes[2], shapes[9]]
  }
}

export default () => [
  [shapes[0]],
  [shapes[3], shapes[2]],
  [shapes[0]],
  [shapes[6]],
  [shapes[0]],
  [shapes[0]],
  [shapes[0]],
  [shapes[6]],
  [shapes[0]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[0]],
  [shapes[6]],
  [shapes[0]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[1], shapes[5]],
  [shapes[0]],
  [shapes[3]],
  [shapes[6]],
  [shapes[1]],
  [shapes[0]],
  [shapes[0]],
  [shapes[0]],
  [shapes[4]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[2]],
  [shapes[0]],
  getCenterRightSCorner(),
  [shapes[6]],
  getTopRightSCorner(),
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[0]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[0]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[0]],
  [shapes[6]],
  [shapes[0]],
  [shapes[6]],
  [shapes[0]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[3], shapes[7]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[0]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  [shapes[6]],
  getBottomLeftSCorner(),
  [shapes[6]],
  getCenterLeftSCorner(),
  [shapes[0]],
  [shapes[1]],
]