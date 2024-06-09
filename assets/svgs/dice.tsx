import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Dice() {
  return (
    <Svg
      width={44}
      height={44}
      viewBox="0 0 44 44"
      fill="none"
    >
      <Path
        d="M1 5.667A4.667 4.667 0 015.667 1h32.666A4.667 4.667 0 0143 5.667v32.666A4.667 4.667 0 0138.333 43H5.667A4.667 4.667 0 011 38.333V5.667z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.833 12.667a1.167 1.167 0 100-2.334 1.167 1.167 0 000 2.334zM30.167 12.667a1.167 1.167 0 100-2.334 1.167 1.167 0 000 2.334zM13.833 23.167a1.167 1.167 0 100-2.334 1.167 1.167 0 000 2.334zM30.167 23.167a1.167 1.167 0 100-2.334 1.167 1.167 0 000 2.334zM30.167 33.667a1.167 1.167 0 100-2.334 1.167 1.167 0 000 2.334zM13.833 33.667a1.167 1.167 0 100-2.334 1.167 1.167 0 000 2.334z"
        fill="#000"
        stroke="#000"
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export { Dice }
