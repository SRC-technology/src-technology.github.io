import React, { useRef, useEffect } from 'react'
import { GRID } from './constants'
import { triangle, rect, triangleBoundary } from './shapes'
import getLatticeTopLeftPixel from './getLatticeTopLeftPixel'
import getLogoList from './getLogoList'

const drawingLoop = (getLatticeTopLeftPixelWithCenterAndGridSize, drawRect, drawTriangle, drawTriangleBoundary, squareSide, clean, time) => {
  clean()

  const logo = getLogoList()
  const l = logo.length
  for (let i = 0; i < l; i ++) {
    const latticeTopLeftPixel = getLatticeTopLeftPixelWithCenterAndGridSize(i)

    // const shape = shapes[(i + time) % shapes.length]
    const pieces = logo[i]

    for (let j = 0; j < pieces.length; j ++) {
      const shape = pieces[j]

      if (shape.type === 'rect') {
        drawRect(latticeTopLeftPixel[0], latticeTopLeftPixel[1], squareSide, squareSide)
      } else if (shape.type === 'triangle') {
        drawTriangle(latticeTopLeftPixel[0], latticeTopLeftPixel[1], shape.up, shape.left, squareSide, squareSide)
      } else if (shape.type === 'triangleBoundary') {
        drawTriangleBoundary(latticeTopLeftPixel[0], latticeTopLeftPixel[1], shape.up, shape.left, squareSide, squareSide)
      }
    }
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

      const getLatticeTopLeftPixelWithCenterAndGridSize = 
        getLatticeTopLeftPixel(middlePoint, squareSide)

      context2d.fillStyle = 'rgba(0,0,0,.8)'
      
      const drawRect = rect(context2d)
      const drawTriangle = triangle(context2d)
      const drawTriangleBoundary = triangleBoundary(context2d)

      const clean = () => context2d.clearRect(0, 0, middlePoint[0] * 2, middlePoint[1] * 2)
      let time = 0

      // drawingLoop(getLatticeTopLeftPixelWithCenterAndGridSize, drawRect, drawTriangle, drawTriangleBoundary, squareSide, clean, time)
      setInterval(() => {
        drawingLoop(getLatticeTopLeftPixelWithCenterAndGridSize, drawRect, drawTriangle, drawTriangleBoundary, squareSide, clean, time)
        time ++
      }, 200)
    }
  })

  return <canvas 
    ref={(domElement) => ref.current = domElement}
    width={width * devicePixelRatio} 
    height={height * devicePixelRatio} 
    style={{width, height, display: 'block', position: 'absolute', top: 0, left: 0}} 
  />
}