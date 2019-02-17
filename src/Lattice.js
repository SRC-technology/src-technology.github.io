import React, { useRef, useEffect } from 'react'
import getLatticeCoordinatesFor from 'zero-indexed-ulam-spiral/getLatticeCoordinatesFor'
import { GRID } from './constants'
import getFibonacci from './getFibonacci'
import getLatticeTopLeftPixel from './getLatticeTopLeftPixel'
import { upToTriangular } from './colorPicking'
import getNthTriangularNumber from 'triangular-numbers/getNthTriangularNumber'
import { triangle, rect, triangleBoundary } from './shapes'

const LENGTH = 20000

const circle = context2d => (x, y, radius) => {
  context2d.beginPath();
  context2d.arc(x, y, radius, 0, 2 * Math.PI)
  context2d.fill()
}

const drawSquare = (context2d) => (x, y, color, size) => {
  const cachedFillStyle = context2d.fillStyle

  context2d.fillStyle = color
  // if (Math.random() > 0.5) {
  rect(context2d)(x, y, size[0], size[1])
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
    // const latticeTopLeftPixel = getLatticeTopLeftPixel(middlePoint, squareSide)(getFibonacci(i + time))
    // const latticeTopLeftPixel = getLatticeTopLeftPixel(middlePoint, squareSide)(getNthTriangularNumber(i + time))
    const latticeTopLeftPixel = getLatticeTopLeftPixel(middlePoint, squareSide)(i * time)
    draw(
      latticeTopLeftPixel[0], 
      latticeTopLeftPixel[1], 
      upToTriangular(i + time),
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
    style={{width, height, display: 'block', position: 'absolute', top: 0, left: 0}} 
  />
}