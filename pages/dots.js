import { Fragment } from 'react'
import Viewport from '../src/Viewport'
import Dots from '../src/Dots'

export default () => (
  <Viewport>
    {({ width, height, devicePixelRatio }) => (
      <Fragment>
        <Dots
          width={width}
          height={height}
          devicePixelRatio={devicePixelRatio}
        />
      </Fragment>
    )}
  </Viewport>    
)
