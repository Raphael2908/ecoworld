import * as React from "react"
import Svg, {
  Ellipse,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg"

function Wayne() {
  return (
    <Svg
      width={93}
      height={99}
      viewBox="0 0 93 99"
      fill="none"
    >
      <Ellipse
        cx={19.4202}
        cy={21.211}
        rx={8.30725}
        ry={19.7858}
        transform="rotate(-31.495 19.42 21.211)"
        fill="#FFADAD"
      />
      <Ellipse
        cx={56.8796}
        cy={24.1466}
        rx={8.30725}
        ry={19.7858}
        transform="rotate(9.707 56.88 24.147)"
        fill="#FFADAD"
      />
      <Path
        d="M88.868 59.415c7.864 31.456-28.35 36.524-51.029 36.393-20.174 0-34.415-19.78-34.415-34.811 0-24.526 29.668-39.953 40.349-39.953 17.8 0 37.58 8.307 45.095 38.37z"
        fill="url(#paint0_linear_66_22)"
        stroke="#000"
        strokeWidth={5}
      />
      <Ellipse
        cx={58.2417}
        cy={14.3342}
        rx={7.35067}
        ry={9.99456}
        transform="rotate(9.707 58.242 14.334)"
        fill="#F9BBBB"
      />
      <Circle cx={60.7828} cy={47.9434} r={11.4719} fill="#000" />
      <Circle cx={29.4066} cy={47.3249} r={11.4719} fill="#EE962E" />
      <Circle cx={30.7192} cy={47.9434} r={11.4719} fill="#000" />
      <Ellipse
        cx={34.5773}
        cy={43.0931}
        rx={2.94676}
        ry={3.95584}
        transform="rotate(-30.685 34.577 43.093)"
        fill="#fff"
      />
      <Ellipse
        cx={65.3825}
        cy={41.7509}
        rx={2.84164}
        ry={3.56025}
        transform="rotate(-28.767 65.382 41.75)"
        fill="#fff"
      />
      <Ellipse
        cx={56.7017}
        cy={55.7657}
        rx={2.84164}
        ry={5.95764}
        transform="rotate(-65.537 56.702 55.766)"
        fill="#fff"
        fillOpacity={0.15}
      />
      <Ellipse
        cx={26.7638}
        cy={82.3583}
        rx={15.4278}
        ry={13.4498}
        fill="#fff"
      />
      <Ellipse cx={60.783} cy={82.3583} rx={15.4278} ry={13.4498} fill="#fff" />
      <Path stroke="#9A9A9A" d="M23.7029 69.6995L23.7029 95.808" />
      <Path stroke="#9A9A9A" d="M30.8235 69.6995L30.8235 95.808" />
      <Path stroke="#9A9A9A" d="M58.5137 69.6995L58.5137 95.808" />
      <Path stroke="#9A9A9A" d="M65.6339 69.6995L65.6339 95.808" />
      <Defs>
        <LinearGradient
          id="paint0_linear_66_22"
          x1={46.6947}
          y1={21.0441}
          x2={46.6947}
          y2={95.81}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.26} stopColor="#FFADAD" />
          <Stop offset={1} stopColor="#996868" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export { Wayne }
