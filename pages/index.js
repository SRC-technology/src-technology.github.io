import { Fragment } from 'react'
import Viewport from '../src/Viewport'
import Lattice from '../src/Lattice'
import Dots from '../src/Dots'
import BigLogo from '../src/BigLogo'

export default () => (
  <Viewport>
    {({ width, height, devicePixelRatio }) => (
      <Fragment>
        <Dots
          width={width}
          height={height}
          devicePixelRatio={devicePixelRatio}
        />
        <Lattice 
          width={width}
          height={height}
          devicePixelRatio={devicePixelRatio}
        />
        <BigLogo 
          width={width}
          height={height}
          devicePixelRatio={devicePixelRatio}
        />
      </Fragment>
    )}
  </Viewport>    
)
