import React, { useRef, useEffect } from 'react'
import { GRID } from './constants'
import { triangle, rect, triangleBoundary, line } from './shapes'
import getLatticeTopLeftPixel from './getLatticeTopLeftPixel'

const LENGTH = 505
const Shapes = {
  Rect: { type: 'rect' },
  BottomLeftTriangle: { type: 'triangle', up: true, left: true },
  BottomRightTriangle: { type: 'triangle', up: true, left: false },
  TopLeftTriangle: { type: 'triangle', up: false, left: true },
  TopRightTriangle: { type: 'triangle', up: false, left: false },
  BottomLine: { type: 'line', position: 'bottom' },
  LeftLine: { type: 'line', position: 'left' },
  RightLine: { type: 'line', position: 'right' },
  TopLine: { type: 'line', position: 'top' },
}
const logo = {
  0: [Shapes.Rect],
  1: [Shapes.Rect],
  2: [Shapes.Rect],
  5: [Shapes.Rect],
  6: [Shapes.Rect],
  7: [Shapes.Rect],
  8: [Shapes.Rect],
  9: [Shapes.TopLeftTriangle],
  10: [Shapes.BottomLeftTriangle],
  11: [Shapes.Rect],
  12: [Shapes.Rect],
  13: [Shapes.Rect],
  16: [Shapes.Rect],
  17: [Shapes.Rect],
  18: [Shapes.Rect],
  19: [Shapes.Rect],
  20: [Shapes.Rect],
  23: [Shapes.Rect],
  24: [Shapes.Rect],
  31: [Shapes.Rect],
  32: [Shapes.Rect],
  35: [Shapes.Rect],
  36: [Shapes.Rect],
  37: [Shapes.Rect],
  38: [Shapes.Rect],
  39: [Shapes.Rect],
  40: [Shapes.Rect],
  41: [Shapes.Rect],
  42: [Shapes.Rect],
  43: [Shapes.Rect],
  46: [Shapes.Rect],
  47: [Shapes.Rect],
  58: [Shapes.Rect],
  59: [Shapes.Rect],
  62: [Shapes.Rect],
  63: [Shapes.Rect],
  73: [Shapes.BottomRightTriangle, Shapes.LeftLine],
  74: [Shapes.Rect],
  75: [Shapes.Rect],
  76: [Shapes.Rect],
  77: [Shapes.Rect],
  78: [Shapes.BottomLeftTriangle],
  81: [Shapes.BottomRightTriangle],
  82: [Shapes.Rect],
  83: [Shapes.Rect],
  84: [Shapes.Rect],
  85: [Shapes.Rect],
  86: [Shapes.Rect],
  87: [Shapes.Rect],
  88: [Shapes.TopRightTriangle],
  112: [Shapes.LeftLine, Shapes.TopLine],
  113: [Shapes.BottomRightTriangle, Shapes.TopLine],
  114: [Shapes.Rect],
  115: [Shapes.Rect],
  116: [Shapes.BottomLeftTriangle],
  121: [Shapes.BottomRightTriangle],
  122: [Shapes.Rect],
  123: [Shapes.Rect],
  124: [Shapes.Rect],
  125: [Shapes.Rect],
  126: [Shapes.Rect],
  127: [Shapes.Rect],
  128: [Shapes.Rect],
  129: [Shapes.Rect],
  130: [Shapes.TopRightTriangle],
  147: [Shapes.TopLeftTriangle],
  148: [Shapes.Rect],
  149: [Shapes.Rect],
  150: [Shapes.BottomLeftTriangle, Shapes.RightLine],
  151: [Shapes.TopLine, Shapes.RightLine],
  154: [Shapes.Rect],
  155: [Shapes.Rect],
  170: [Shapes.Rect],
  171: [Shapes.Rect],
  178: [Shapes.Rect],
  179: [Shapes.Rect],
  199: [Shapes.TopLeftTriangle],
  200: [Shapes.Rect],
  201: [Shapes.Rect],
  202: [Shapes.Rect],
  203: [Shapes.Rect],
  204: [Shapes.BottomLeftTriangle, Shapes.TopLine],
  207: [Shapes.Rect],
  208: [Shapes.Rect],
  227: [Shapes.Rect],
  228: [Shapes.Rect],
  235: [Shapes.Rect],
  236: [Shapes.Rect],
  260: [Shapes.Rect],
  261: [Shapes.Rect],
  264: [Shapes.Rect],
  265: [Shapes.Rect],
  268: [Shapes.Rect],
  269: [Shapes.Rect],
  292: [Shapes.BottomLeftTriangle, Shapes.TopLine],
  293: [Shapes.Rect],
  300: [Shapes.Rect],
  301: [Shapes.Rect],
  329: [Shapes.Rect],
  330: [Shapes.Rect],
  333: [Shapes.Rect],
  334: [Shapes.Rect],
  337: [Shapes.Rect],
  338: [Shapes.Rect],
  365: [Shapes.TopLine, Shapes.RightLine],
  366: [Shapes.BottomLeftTriangle, Shapes.RightLine],
  373: [Shapes.Rect],
  374: [Shapes.Rect],
  406: [Shapes.Rect],
  407: [Shapes.Rect],
  410: [Shapes.Rect],
  411: [Shapes.Rect],
  412: [Shapes.Rect],
  413: [Shapes.Rect],
  414: [Shapes.Rect],
  415: [Shapes.BottomRightTriangle],
  491: [Shapes.Rect],
  492: [Shapes.Rect],
  495: [Shapes.Rect],
  496: [Shapes.Rect],
  497: [Shapes.Rect],
  498: [Shapes.Rect],
  499: [Shapes.BottomRightTriangle],
}

const drawingLoop = (getLatticeTopLeftPixelWithCenterAndGridSize, drawRect, drawTriangle, drawTriangleBoundary, drawLine, squareSide, clean, time) => {
  clean()

  for (let i = 0; i < LENGTH; i ++) {
    const displacement = Math.max(20 - time, 0)
    const latticeTopLeftPixel = getLatticeTopLeftPixelWithCenterAndGridSize(i + displacement)

    // const shape = shapes[(i + time) % shapes.length]
    const pieces = logo[i]

    if (pieces !== undefined) {
      console.log(pieces)
      for (let j = 0; j < pieces.length; j ++) {
        const shape = pieces[j]
  
        if (shape.type === 'rect') {
          drawRect(latticeTopLeftPixel[0], latticeTopLeftPixel[1], squareSide, squareSide)
        } else if (shape.type === 'triangle') {
          drawTriangle(latticeTopLeftPixel[0], latticeTopLeftPixel[1], shape.up, shape.left, squareSide, squareSide)
        } else if (shape.type === 'triangleBoundary') {
          drawTriangleBoundary(latticeTopLeftPixel[0], latticeTopLeftPixel[1], shape.up, shape.left, squareSide, squareSide)
        } else if (shape.type === 'line') {
          drawLine(latticeTopLeftPixel[0], latticeTopLeftPixel[1], shape.position, squareSide)
        }
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
      const drawLine = line(context2d)

      const clean = () => context2d.clearRect(0, 0, middlePoint[0] * 2, middlePoint[1] * 2)
      let time = 0

      // drawingLoop(getLatticeTopLeftPixelWithCenterAndGridSize, drawRect, drawTriangle, drawTriangleBoundary, squareSide, clean, time)
      setInterval(() => {
        drawingLoop(getLatticeTopLeftPixelWithCenterAndGridSize, drawRect, drawTriangle, drawTriangleBoundary, drawLine, squareSide, clean, time)
        time ++
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