import React, { useEffect, useState } from "react";
import { LayoutChangeEvent, Pressable, SafeAreaView, Text, View } from "react-native";
import {
    Canvas,
    Group,
    ImageSVG,
    useSVG
  } from "@shopify/react-native-skia"
import useLoadAnimals from "@/hooks/useLoadAnimals";

const world = () => {
    const [ canvasWidth, setCanvasWidth ] = useState(Number)
    const [ canvasHeight, setCanvasHeight ] = useState(Number)
    // const [animalRender, setAnimalRender] = useState<JSX.Element[]>([]);
    const { animals } = useLoadAnimals()
    const animalRender: Array<JSX.Element> = []
    
    function getCanvasSize(event: LayoutChangeEvent){
        const {x, y, width, height} = event.nativeEvent.layout;
        setCanvasWidth(width)
        setCanvasHeight(height)
    }

    const wayne = useSVG(require("../assets/svgs/wayne.svg"));
    const captainJef = useSVG(require("../assets/svgs/captain-jef.svg"));
    const svg = useSVG(require("../assets/svgs/ecoworld.svg"));
    
    animals.forEach(animal => {
      if (animal.name === "wayne") {
        animalRender.push(<ImageSVG
            key="wayne"
            svg={wayne}
            width={70}
            height={70}
            x={(canvasWidth - 70) / 2} // 307 is the width of the svg
            y={(canvasHeight - 70) / 2} // Roughly centered/
          />)
      }
      if (animal.name === "captain jef") {
          animalRender.push(<ImageSVG
            key="captain_jef"
            svg={captainJef}
            width={340}
            height={340}
            x={(canvasWidth - 70) / 2} // 307 is the width of the svg
            y={(canvasHeight - 70) / 2} // Roughly centered/
          />)
      }
    });
    
    return (
    <Canvas style={{ flex: 1, backgroundColor: '#F7F2EE'}} onLayout={(event) => getCanvasSize(event)}>
      { svg && (
          <Group>
            <ImageSVG
                svg={svg}
                width={340}
                height={340}
                x={(canvasWidth - 340) / 2} // 307 is the width of the svg
                y={(canvasHeight - 340) / 2} // Roughly centered
            />
            {animalRender}
          </Group>
        )
      }
    </Canvas>
    )
}

export default world 