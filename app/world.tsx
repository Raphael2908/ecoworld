import React, { useEffect, useState } from "react";
import { LayoutChangeEvent, Pressable, SafeAreaView, Text, View } from "react-native";
import useLoadAnimals from "@/hooks/useLoadAnimals";
import EcoWorld from "@/assets/svgs/ecoworld";
import { Wayne } from "@/assets/svgs/wayne";
import { CaptainJef } from "@/assets/svgs/captainJef";

const world = () => {
    // const [animalRender, setAnimalRender] = useState<JSX.Element[]>([]);
    const { animals } = useLoadAnimals()
    const animalRender: Array<JSX.Element> = []
    
    // top must be 100 - 250
    animals.forEach(animal => {
      if (animal.name === "wayne") {
        animalRender.push(
        <View style={{height:70, zIndex: 1, top: 250}}> 
          <Wayne key={animal.name}/>
        </View>)
      }
      if (animal.name === "captain jef") {
          animalRender.push(<CaptainJef key={animal.name}/>)
      }
      
    });
    
    return (
      <View style={{padding: 10}}>
        {animalRender}
        <View style={{height:400}}>
          <EcoWorld/>
        </View>
      </View>
    )
}

export default world 