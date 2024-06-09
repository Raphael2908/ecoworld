import React, { useState } from "react";
import { LayoutChangeEvent, SafeAreaView } from "react-native";
import {
    Canvas,
    ImageSVG,
    useSVG,
    Text,
    useFont
  } from "@shopify/react-native-skia"

const susBall = () => {
    const [canvasWidth, setCanvasWidth ] = useState(0);
    const [canvasHeight, setCanvasHeight ] = useState(0);
    
    function getCanvasSize(event: LayoutChangeEvent){
        const { width, height } = event.nativeEvent.layout;
        setCanvasWidth(width);
        setCanvasHeight(height);
    }

    const svg = useSVG(require("../assets/svgs/susball.svg"));
    const fontSize = 32;
    const font = useFont(require("../assets/fonts/source-sans-pro/SourceSansPro-Regular.ttf"), fontSize);

    if (!font || !svg) {
        return null; // Return null until font and svg are loaded
    }

    const svgWidth = 320;
    const svgHeight = 320;
    const svgX = (canvasWidth - svgWidth) / 2;
    const svgY = (canvasHeight - svgHeight) / 2;

    const textWidth = font.getTextWidth("TAP X3");
    const textX = (canvasWidth - textWidth) / 2;
    const textY = svgY - 20; // Slightly above the SVG

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Canvas style={{ flex: 1, backgroundColor: '#F7F2EE' }} onLayout={getCanvasSize}>
                <Text
                    x={textX}
                    y={textY}
                    text="TAP X3"
                    font={font}
                />
                <ImageSVG
                    svg={svg}
                    width={svgWidth}
                    height={svgHeight}
                    x={svgX}
                    y={svgY}
                />
            </Canvas>
        </SafeAreaView>
    );
}

export default susBall;
