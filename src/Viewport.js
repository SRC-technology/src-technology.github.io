import Head from 'next/head'
import React, { Fragment, useState, useEffect } from 'react'

export default ({ children }) => {
  const [viewportSize, updateViewportSize] = useState({ width: undefined, height: undefined })

  useEffect(() => {
    if (global.innerWidth !== undefined) {
      const doTheUpdate = () => updateViewportSize({
        height: global.innerHeight,
        width: global.innerWidth,
      })

      global.addEventListener('resize', doTheUpdate)
      
      doTheUpdate()

      return global.removeEventListener('resize', doTheUpdate)
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <style>
          {`* { margin: 0; padding: 0 }`}
        </style>
      </Head>
      {viewportSize.width !== undefined && (
        children({
          width: viewportSize.width,
          height: viewportSize.height,
          devicePixelRatio:
            global.devicePixelRatio !== undefined  
              ? global.devicePixelRatio 
              : 1
        })
      )}
    </Fragment>
  )
}