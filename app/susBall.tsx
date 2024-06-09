import React, { useState } from "react";
import { LayoutChangeEvent, Pressable, SafeAreaView, Text, View } from "react-native";
import {
    Canvas,
    ImageSVG,
    useSVG
  } from "@shopify/react-native-skia"
import useReward from "@/hooks/useReward";
import { Susball, Wayne, CaptainJef } from "@/assets/svgs/svgComponents"

const SusBall = () => {
    const [canvasWidth, setCanvasWidth ] = useState(0);
    const [canvasHeight, setCanvasHeight ] = useState(0);
    const { increment, reward, rollsStatus, rolls } = useReward(0);

    function getCanvasSize(event: LayoutChangeEvent){
        const { width, height } = event.nativeEvent.layout;
        setCanvasWidth(width);
        setCanvasHeight(height);
    }

    const svg = useSVG(require("../assets/svgs/ecoworld.svg"));

    return (
        <View style={{ flex: 1, backgroundColor: '#F7F2EE', justifyContent: 'center'}}>
            <Text style={{ flexShrink: 1, fontSize: 40, color: "black", alignSelf: 'center' }}>TAP X3</Text>
            <View>
                <Pressable onPress={increment} style={{ height: 300 }}>
                    <Susball />
                </Pressable>
                {rollsStatus && <Text>No more rolls</Text>}
                <View>
                    {reward === 'wayne' && (
                        <View>
                            <Wayne />
                        </View>
                    )}
                    {reward === 'captain jef' && (
                        <View>
                            <CaptainJef />
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
}

export default SusBall;
