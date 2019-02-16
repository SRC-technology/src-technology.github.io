import React, { useRef, useEffect } from 'react'
import getLatticeCoordinatesFor from 'zero-indexed-ulam-spiral/getLatticeCoordinatesFor'

const palette = [
  'rgb(19, 107, 251)',
  'rgb(252, 107, 33)',
  'rgb(252, 36, 226)',
  'rgb(28, 165, 252)',
  'rgb(253, 183, 43)',
  'rgb(252, 19, 109)',
  'rgb(0, 0, 0)'
]

const drawSquare = (squareSide) => (context2d) => (x, y, color) => {
  const cachedFillStyle = context2d.fillStyle

  context2d.fillStyle = color
  context2d.fillRect(x, y, squareSide, squareSide)
  context2d.fillStyle = cachedFillStyle
}

const fibonaccis = [1, 1]
const getFibonacci = (num) => {
  for (let i = fibonaccis.length; i <= num; ++i) {
    fibonaccis[i] = fibonaccis[i - 1] + fibonaccis[i - 2]
  }
  return fibonaccis[num]
}

const renderLoop = (context2d, draw, squareSide, length, time, middlePoint) => {
  context2d.clearRect(0, 0, middlePoint[0] * 2, middlePoint[1] * 2)

  for (let i = 0; i < length; i++) {
    const latticeCoordinates = getLatticeCoordinatesFor(getFibonacci(i) + time)
    draw(
      middlePoint[0] + (latticeCoordinates[0] * squareSide), 
      middlePoint[1] + (latticeCoordinates[1] * squareSide), 
      palette[(i + time) % palette.length]
    )
  }
  
}

export default ({ width, height, devicePixelRatio }) => {
  const ref = useRef()

  useEffect(() => {
    if (ref.current !== undefined) {
      const squareSide = 10 * devicePixelRatio

      const middlePoint = [
        Math.floor(width / 2) * devicePixelRatio, 
        Math.floor(height / 2) * devicePixelRatio
      ]
        
      const context2d = ref.current.getContext('2d')
      const draw = drawSquare(squareSide)(context2d)
      const length = 30
      let time = 0

      setInterval(() => {
        renderLoop(context2d, draw, squareSide, length, time, middlePoint)
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