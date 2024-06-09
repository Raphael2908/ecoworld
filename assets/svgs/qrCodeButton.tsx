import * as React from "react"
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg"

function QrCodeButton() {
  return (
    <Svg
      width={47}
      height={47}
      viewBox="0 0 47 47"
      fill="none"
    >
      <G
        clipPath="url(#clip0_8_77)"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M7.833 13.708V11.75a3.917 3.917 0 013.917-3.917h3.917M7.833 33.292v1.958a3.917 3.917 0 003.917 3.917h3.917M31.333 7.833h3.917a3.917 3.917 0 013.917 3.917v1.958M31.333 39.167h3.917a3.917 3.917 0 003.917-3.917v-1.958M9.792 21.542h1.958v3.916H9.792v-3.916zM19.583 21.542v3.916M27.417 21.542h1.958v3.916h-1.958v-3.916zM37.208 21.542v3.916" />
      </G>
      <Rect
        x={1}
        y={1}
        width={45}
        height={45}
        rx={7}
        stroke="#000"
        strokeWidth={2}
      />
      <Defs>
        <ClipPath id="clip0_8_77">
          <Rect width={47} height={47} rx={8} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export { QrCodeButton }