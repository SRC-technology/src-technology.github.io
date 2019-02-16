import Head from 'next/head'
import { Fragment, useState, useEffect } from 'react'
import Lattice from '../src/Lattice'

export default () => {
  const [viewportSize, updateViewportSize] = useState({ width: undefined, height: undefined })

  useEffect(() => {
    if (global.innerWidth !== undefined) {

      console.log(global.innerHeight,
        global.innerWidth)
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
        <Lattice 
          width={viewportSize.width}
          height={viewportSize.height}
          devicePixelRatio={
            global.devicePixelRatio !== undefined  
              ? global.devicePixelRatio 
              : 1}
        />
      )}
    </Fragment>
  )
}