import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"

function EcoWorldButton() {
  return (
    <Svg
      width={242}
      height={242}
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
      <G
        clipPath="url(#clip0_8_55)"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path
          d="M143 83.875L159.125 100l-10.75 5.375 21.5 21.5-16.125 5.375 21.5 21.5h-48.375"
          stroke="#0DB031"
        />
        <Path
          d="M137.625 169.875V153.75M100 126.875l-10.75-10.75M100 121.5l10.75-10.75M100 169.875V100"
          stroke="#795217"
        />
        <Path
          d="M88.304 143a16.131 16.131 0 01-11.999-6.477 16.131 16.131 0 01-2.745-13.357 16.118 16.118 0 01-5.774-13.403 16.125 16.125 0 017.408-12.574A16.125 16.125 0 01100 77.264a16.125 16.125 0 0124.8 19.925 16.125 16.125 0 011.64 25.977 16.134 16.134 0 01-3.034 13.732 16.122 16.122 0 01-12.656 6.129h-21.5l-.946-.027z"
          stroke="#0DB031"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_8_55">
          <Path fill="#fff" transform="translate(57 57)" d="M0 0H129V129H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export { EcoWorldButton }