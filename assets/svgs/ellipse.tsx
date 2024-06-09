import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function Ellipse() {
  return (
    <Svg
      viewBox="0 0 242 242"
      fill="none"
    >
      <Circle
        cx={121}
        cy={121}
        r={119}
        fill="#B2FFB0"
        stroke="#A7D990"
        strokeWidth={4}
      />
    </Svg>
  )
}

export { Ellipse }
