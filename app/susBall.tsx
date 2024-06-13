import React, { useState } from "react";
import { LayoutChangeEvent, Pressable, SafeAreaView, Text, View } from "react-native";
import useReward from "@/hooks/useReward";
import { Susball, Wayne, CaptainJef, Ellipse } from "@/assets/svgs/svgComponents"

const SusBall = () => {
    const { increment, reward, rolls } = useReward(0);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F2EE', justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 24, padding: 10}}>Rolls left: {rolls}</Text>
            <View style={{flex: 1, justifyContent: 'center'}}>
                    { reward == null &&
                        <View>
                            <Text style={{ flexShrink: 1, fontSize: 40, color: "black", alignSelf: 'center' }}>TAP X3</Text>
                            <Pressable onPress={increment} style={{ height: 300 }}>
                                <Susball/>
                            </Pressable>
                        </View>
                    }
                    { reward == 'wayne' &&
                        <View>
                            <Text style={{ flexShrink: 1, fontSize: 32, color: "black", alignSelf: 'center' }}>You found Wayne!</Text>
                            <View style={{height: 200}}>
                                <Wayne/>
                            </View>
                        </View>
                    }
                    { reward == 'captain jef' &&
                        <View>
                            <Text style={{ flexShrink: 1, fontSize: 32, color: "black", alignSelf: 'center' }}>You found Captain Jef</Text>
                            <View style={{height: 200}}>
                                <CaptainJef/>
                            </View>
                        </View>
                    }
            </View>
        </SafeAreaView>
    );
}

export default SusBall;
