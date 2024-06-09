import React, { useState } from "react";
import { LayoutChangeEvent, Pressable, SafeAreaView, Text, View } from "react-native";
import useReward from "@/hooks/useReward";
import { Susball, Wayne, CaptainJef, Ellipse } from "@/assets/svgs/svgComponents"

const SusBall = () => {
    const { increment, reward, rollsStatus, rolls } = useReward(0);

    return (
        <View style={{ flex: 1, backgroundColor: '#F7F2EE', justifyContent: 'center',}}>
            <Text style={{ flexShrink: 1, fontSize: 40, color: "black", alignSelf: 'center' }}>TAP X3</Text>
                { reward == null &&
                    <Pressable onPress={increment} style={{ height: 300 }}>
                        <Susball/>
                    </Pressable>
                }
                { reward == 'wayne' && 
                    <View style={{ position: 'absolute', top: "43%", left: 0, right: 0, height: 150, zIndex: 1 }}>
                        <Wayne/>
                    </View>
                }
                { reward == 'captain jef' &&
                    <View style={{ position: 'absolute', top: "43%", left: 0, right: 0, height: 150, zIndex: 1 }}>
                        <CaptainJef/>
                    </View>
                }
                <View style={{ height: 300 }}>
                    <Ellipse/>
                </View>
        </View>
    );
}

export default SusBall;
