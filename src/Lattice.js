import React, { useRef, useEffect } from 'react'
import getLatticeCoordinatesFor from 'zero-indexed-ulam-spiral/getLatticeCoordinatesFor'
import { GRID } from './constants'
import getFibonacci from './getFibonacci'
import { upToTriangular } from './colorPicking'
import getNthTriangularNumber from 'triangular-numbers/getNthTriangularNumber'

const LENGTH = 20000

const palette = [
  'rgb(19, 107, 251)',
  'rgb(252, 107, 33)',
  'rgb(252, 36, 226)',
  'rgb(28, 165, 252)',
  'rgb(253, 183, 43)',
  'rgb(252, 19, 109)',
  'rgb(0, 0, 0)'
]

const rect = context2d => (x, y, width, height) => {
  context2d.fillRect(x, y, width, height)
}

const circle = context2d => (x, y, radius) => {
  context2d.beginPath();
  context2d.arc(x, y, radius, 0, 2 * Math.PI)
  context2d.fill()
}

const drawSquare = (context2d) => (x, y, color, size) => {
  const cachedFillStyle = context2d.fillStyle

  context2d.fillStyle = color
  // if (Math.random() > 0.5) {
  rect(context2d)(x - ((size[0] - 10) / 2), y - ((size[1] - 10) / 2), size[0], size[1])
  // } else {
  //   circle(context2d)(x, y, size[0])
  // }
  context2d.fillStyle = cachedFillStyle
}

const sizes = [
  [10, 10],
  [20, 20],
  [30, 30]
]

const renderLoop = (context2d, draw, squareSide, time, middlePoint) => {
  context2d.clearRect(0, 0, middlePoint[0] * 2, middlePoint[1] * 2)

  for (let i = 0; i < LENGTH; i++) {
    // const latticeCoordinates = getLatticeCoordinatesFor(getFibonacci(i) + time)
    const latticeCoordinates = getLatticeCoordinatesFor(getNthTriangularNumber(i))
    // const latticeCoordinates = getLatticeCoordinatesFor(i * time)
    draw(
      middlePoint[0] + (latticeCoordinates[0] * squareSide), 
      middlePoint[1] + (latticeCoordinates[1] * squareSide), 
      upToTriangular(i),
      sizes[1]
    )
  }
  
}

export default ({ width, height, devicePixelRatio }) => {
  const ref = useRef()

  useEffect(() => {
    if (ref.current !== undefined) {
      const squareSide = GRID * devicePixelRatio

      const middlePoint = [
        Math.floor(width / 2) * devicePixelRatio, 
        Math.floor(height / 2) * devicePixelRatio
      ]
        
      const context2d = ref.current.getContext('2d')
      const draw = drawSquare(context2d)
      let time = 0

      setInterval(() => {
        renderLoop(context2d, draw, squareSide, time, middlePoint)
        time += 1  
      }, 50)
    }
  })

  return <canvas 
        ref={(domElement) => ref.current = domElement}
        width={width * devicePixelRatio} 
        height={height * devicePixelRatio} 
        style={{width, height, display: 'block'}} 
    />
}