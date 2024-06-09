import * as React from "react"
import Svg, { Circle, Path, Rect } from "react-native-svg"

function Susball() {
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
      <Path
        transform="matrix(.86603 .5 -.86603 .5 109.622 37)"
        fill="#4974D2"
        d="M0 0H100V70H0z"
      />
      <Path
        transform="matrix(.86603 .5 0 1 49 72)"
        fill="#457DD4"
        d="M0 0H100V80H0z"
      />
      <Path
        transform="matrix(.86603 -.5 0 1 135.603 122)"
        fill="#31539D"
        d="M0 0H70V80H0z"
      />
      <Path
        d="M63.09 104.277l3.775-7.87 2.658 1.276c.615.295 1.07.642 1.363 1.041.295.397.45.823.465 1.277.015.455-.088.914-.31 1.378-.223.463-.515.829-.877 1.097a2.22 2.22 0 01-1.278.427c-.489.014-1.038-.125-1.647-.417l-2.152-1.032.413-.861 2.12 1.017c.42.202.788.302 1.103.302.318.002.589-.083.812-.253a1.95 1.95 0 00.568-.73c.15-.315.224-.619.22-.911a1.337 1.337 0 00-.304-.816c-.196-.255-.507-.484-.932-.688l-1.675-.804-3.37 7.024-.952-.457zm5.4-1.758l.24 4.463-1.106-.531-.21-4.448 1.076.516zm3.75 6.298c-.569-.273-1-.634-1.291-1.083a2.8 2.8 0 01-.44-1.515c-.002-.562.142-1.145.432-1.749.29-.605.656-1.085 1.097-1.44a2.896 2.896 0 011.45-.638c.525-.069 1.053.024 1.586.279.308.148.587.344.837.591.25.246.444.543.579.892.137.346.188.742.153 1.188-.035.447-.184.946-.448 1.496l-.184.385-4.55-2.182.376-.784 3.627 1.74a2.15 2.15 0 00.228-.988 1.665 1.665 0 00-.264-.887 1.738 1.738 0 00-.744-.636c-.362-.173-.717-.234-1.067-.181a1.965 1.965 0 00-.935.402 2.258 2.258 0 00-.65.813l-.25.523c-.214.446-.319.86-.314 1.244.01.382.113.72.312 1.015.2.291.484.525.85.7.239.115.47.185.694.21.228.024.445.002.65-.066.208-.071.4-.19.574-.358l.758.666c-.234.253-.515.44-.84.561a2.521 2.521 0 01-1.058.135 3.297 3.297 0 01-1.168-.333zm6.22 2.984c-.553-.266-.967-.625-1.24-1.078a2.833 2.833 0 01-.405-1.522c.005-.562.148-1.137.43-1.726.288-.599.652-1.076 1.093-1.428a2.887 2.887 0 011.447-.634c.525-.07 1.054.023 1.587.279.415.199.752.455 1.011.769.26.313.429.659.509 1.038.08.378.057.764-.069 1.158l-.907-.435a1.56 1.56 0 00-.118-.936c-.135-.323-.402-.581-.802-.772a1.769 1.769 0 00-1.062-.17c-.351.056-.68.214-.99.476-.304.26-.563.613-.777 1.059-.218.456-.337.888-.356 1.294-.016.409.063.769.237 1.083.177.315.445.558.803.73.236.113.47.175.7.185.232.01.451-.03.658-.119.207-.09.39-.229.55-.417l.907.435a2.333 2.333 0 01-1.944 1.038c-.406.004-.826-.098-1.262-.307zm3.228 4.119a2.182 2.182 0 01-.393-.236 1.144 1.144 0 01-.216-.189l.614-.688c.193.162.378.276.554.341a.775.775 0 00.558-.011c.198-.069.423-.227.677-.474l.39-.38.663-6.979.984.472-.627 5.484.062.03 3.885-3.922.983.472-5.749 5.561c-.258.25-.519.436-.781.556a1.75 1.75 0 01-.796.171 1.99 1.99 0 01-.808-.208zm8.627 1.567c-.553-.265-.966-.624-1.24-1.077a2.835 2.835 0 01-.405-1.522c.005-.562.148-1.137.431-1.727.287-.599.651-1.075 1.092-1.428a2.895 2.895 0 011.447-.633c.525-.07 1.054.023 1.587.278.415.199.752.456 1.011.769.26.314.43.66.509 1.038.08.379.057.765-.069 1.158l-.906-.435a1.56 1.56 0 00-.119-.936c-.135-.323-.402-.58-.802-.772a1.768 1.768 0 00-1.062-.169c-.351.055-.68.214-.989.476-.304.26-.564.613-.778 1.059-.218.456-.337.887-.356 1.294-.016.408.063.769.237 1.083.177.314.445.558.803.73.236.113.47.174.7.185a1.468 1.468 0 001.208-.537l.907.435a2.327 2.327 0 01-1.944 1.038c-.406.005-.826-.098-1.261-.307zm8.387-5.808l-3.775 7.869-.906-.435 3.774-7.869.907.435zm.302 9.976c-.569-.273-1-.634-1.291-1.083a2.801 2.801 0 01-.44-1.515c-.002-.562.142-1.145.432-1.75.29-.604.656-1.084 1.097-1.439.445-.357.928-.57 1.45-.638.525-.069 1.053.024 1.586.279.308.148.587.344.837.591.251.246.444.543.579.892.136.346.187.742.153 1.188-.035.447-.184.946-.448 1.496l-.185.384-4.549-2.182.376-.783 3.627 1.739a2.14 2.14 0 00.228-.987 1.667 1.667 0 00-.264-.888 1.749 1.749 0 00-.745-.635 1.795 1.795 0 00-1.066-.181 1.956 1.956 0 00-.935.402 2.258 2.258 0 00-.65.813l-.25.523c-.214.445-.319.86-.314 1.244.01.382.113.72.312 1.014.2.292.484.525.85.701.239.114.47.184.694.21.228.024.445.002.651-.066.207-.071.398-.19.573-.358l.758.666c-.234.253-.515.44-.841.561a2.518 2.518 0 01-1.057.135 3.319 3.319 0 01-1.168-.333zm10.822-4.64l1.137.546-.458 7.814.092.045 5.807-5.249 1.137.545-3.774 7.869-.892-.428 2.868-5.978-.077-.037-5.326 4.799-.861-.413.409-7.158-.077-.037-2.868 5.979-.891-.428 3.774-7.869zm8.144 13.737c-.569-.273-.999-.633-1.291-1.082a2.803 2.803 0 01-.44-1.516c-.002-.561.142-1.145.432-1.749.29-.605.656-1.084 1.097-1.44a2.887 2.887 0 011.45-.637c.525-.07 1.054.023 1.586.279.308.147.587.344.837.59.251.246.444.544.579.892.137.346.188.742.153 1.189-.035.446-.184.945-.448 1.496l-.185.384-4.549-2.182.376-.784 3.627 1.74a2.14 2.14 0 00.228-.987 1.667 1.667 0 00-.264-.888 1.741 1.741 0 00-.744-.636 1.815 1.815 0 00-1.067-.181 1.966 1.966 0 00-.935.403 2.243 2.243 0 00-.65.813l-.25.522c-.214.446-.319.861-.314 1.244.009.383.113.721.312 1.015.201.291.484.525.851.701.238.114.469.184.693.209.228.025.445.003.651-.066.207-.07.398-.19.573-.358l.758.666c-.234.253-.515.44-.841.561a2.502 2.502 0 01-1.057.136 3.318 3.318 0 01-1.168-.334z"
        fill="#fff"
      />
      <Path
        transform="matrix(.86603 .5 -.86603 .5 115.941 14)"
        fill="#4974D2"
        d="M0 0H54.3388V38.0372H0z"
      />
      <Rect
        width={54.3388}
        height={43.4711}
        rx={2}
        transform="matrix(.86603 .5 0 1 83 33.019)"
        fill="#5B5C60"
        stroke="#4F72EC"
      />
      <Path
        transform="matrix(.86603 -.5 0 1 130.059 60.188)"
        fill="#31539D"
        d="M0 0H38.0372V43.4711H0z"
      />
    </Svg>
  )
}

export { Susball }