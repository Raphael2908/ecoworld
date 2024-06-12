import React, { useEffect, useState } from "react";
import { LayoutChangeEvent, Pressable, SafeAreaView, Text, View } from "react-native";
import useReward from "@/hooks/useReward";
import { Susball, Wayne, CaptainJef, Ellipse } from "@/assets/svgs/svgComponents"

const SusBall = () => {
    const { increment, reward, rolls, isLoading } = useReward(undefined);
    console.log(rolls, isLoading)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F2EE', justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: 24, padding: 10 }}>Rolls left: {!isLoading ? rolls : "Loading"}</Text>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {reward == null &&
                    <View>
                        <Text style={{ flexShrink: 1, fontSize: 40, color: "black", alignSelf: 'center' }}>TAP X3</Text>
                        <Pressable onPress={increment} disabled={isLoading} style={{ height: 300 }}>
                            <Susball />
                        </Pressable>
                    </View>
                }
                {reward == 'wayne' &&
                    <View style={{ height: 200 }}>
                        <Text style={{ flexShrink: 1, fontSize: 40, color: "black", alignSelf: 'center' }}>You got Wayne!</Text>
                        <Wayne />
                    </View>
                }
                {reward == 'captain jef' &&
                    <View style={{ height: 200 }}>
                        <Text style={{ flexShrink: 1, fontSize: 40, color: "black", alignSelf: 'center' }}>You got Capitan Jef!</Text>
                        <CaptainJef />
                    </View>
                }
            </View>
        </SafeAreaView>
    );
}

export default SusBall;
