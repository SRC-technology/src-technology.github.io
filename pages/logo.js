import { Fragment } from 'react'
import Viewport from '../src/Viewport'
import Lattice from '../src/Lattice'
import Dots from '../src/Dots'
import Logo from '../src/Logo'

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
        <div style={{zIndex: 20}}>
          <Logo 
            width={width}
            height={height}
            devicePixelRatio={devicePixelRatio}
          />
        </div>
      </Fragment>
    )}
  </Viewport>    
)
