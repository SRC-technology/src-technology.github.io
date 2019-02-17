import React, { useRef, useEffect } from 'react'
import { GRID } from './constants'
import { dot } from './shapes'
import getLatticeTopLeftPixel from './getLatticeTopLeftPixel'
import getLogoList from './getLogoList'

const LENGTH = 20000

const drawingLoop = (getLatticeTopLeftPixelWithCenterAndGridSize, drawDot, squareSide, clean, time) => {
  clean()

  const logo = getLogoList()
  const l = logo.length
  for (let i = 0; i < LENGTH; i ++) {
    const latticeTopLeftPixel = getLatticeTopLeftPixelWithCenterAndGridSize(i)

    drawDot(latticeTopLeftPixel[0], latticeTopLeftPixel[1])
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
      
      context2d.fillStyle = 'rgba(0,0,0,0.3)'
      const drawDot = dot(context2d)

      const clean = () => context2d.clearRect(0, 0, middlePoint[0] * 2, middlePoint[1] * 2)
      let time = 0

      drawingLoop(getLatticeTopLeftPixelWithCenterAndGridSize, drawDot, squareSide, clean, time)
      // setInterval(() => {
      //   // drawingLoop(getLatticeTopLeftPixelWithCenterAndGridSize, d, drawTriangle, drawTriangleBoundary, squareSide, clean, time)
      //   time ++
      // }, 200)
    }
  })

  return <canvas 
    ref={(domElement) => ref.current = domElement}
    width={width * devicePixelRatio} 
    height={height * devicePixelRatio} 
    style={{width, height, display: 'block', position: 'absolute', top: 0, left: 0}} 
  />
}