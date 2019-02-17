import Viewport from '../src/Viewport'
import Lattice from '../src/Lattice'

export default () => (
  <Viewport>
    {({ width, height, devicePixelRatio }) => (
      <Lattice 
        width={width}
        height={height}
        devicePixelRatio={devicePixelRatio}
      />
    )}
  </Viewport>    
)
