import React, { useState } from "react";
import { LayoutChangeEvent, Pressable, SafeAreaView, Text, View } from "react-native";
import {
    Canvas,
    ImageSVG,
    useSVG
  } from "@shopify/react-native-skia"

const world = () => {
    const [canvasWidth, setCanvasWidth ] = useState(Number)
    const [canvasHeight, setCanvasHeight ] = useState(Number)
    
    function getCanvasSize(event: LayoutChangeEvent){
        const {x, y, width, height} = event.nativeEvent.layout;
        setCanvasWidth(width)
        setCanvasHeight(height)
    }

    const svg = useSVG(require("../assets/svgs/ecoworld.svg"));
    return (
    <Canvas style={{ flex: 1, backgroundColor: '#F7F2EE'}} onLayout={(event) => getCanvasSize(event)}>
      { svg && (
        <ImageSVG
            svg={svg}
            width={340}
            height={340}
            x={(canvasWidth - 340) / 2} // 307 is the width of the svg
            y={(canvasHeight - 340) / 2} // Roughly centered
        />
        )
      }
    </Canvas>
    )
}

export default world 