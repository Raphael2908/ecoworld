import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import useLoadAnimals from "@/hooks/useLoadAnimals";
import EcoWorld from "@/assets/svgs/ecoworld";
import { Wayne } from "@/assets/svgs/wayne";
import { CaptainJef } from "@/assets/svgs/captainJef";

interface Animal {
  name: string,
  user_id: string,
  created_at: string,
  id: string
}
function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const World = () => {
  const [animals, setAnimals] = useState<Array<Animal> | []>([]);
  const [animalRender, setAnimalRender] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    async function fetchAnimals() {
      const res = await useLoadAnimals();

      if (res == undefined) {
        console.log("res empty");
      } else {
        setAnimals(res);
        const newAnimalRender: Array<JSX.Element> = [];

        res.forEach(animal => {
          if (animal.name === "wayne") {
            let wayneX = randomIntFromInterval(100, 300)
            let wayneY = randomIntFromInterval(150, 250)
            newAnimalRender.push(
              <View key={animal.id} style={{ height: 70, width: 70, position: 'absolute', zIndex: 3, top: wayneY, right: wayneX }}>
                <Wayne />
              </View>
            );
          }
          if (animal.name === "captain jef") {
            let captainJefX = randomIntFromInterval(100, 300)
            let captainJefY = randomIntFromInterval(150, 250)
            newAnimalRender.push(
              <View key={animal.id} style={{ height: 70, width: 70, position: 'absolute', zIndex: 3, top: captainJefY, right: captainJefX }}>
              <CaptainJef />
            </View>
            );
          }
        });

        setAnimalRender(newAnimalRender);
      }
    }
    fetchAnimals();
  }, []);

  return (
    <View style={{ padding: 10 , height: "100%", position: 'relative' }}>
      {animalRender}
      <View style={{ height: 400, width: "100%", position: 'absolute', left: 10, top: 100}}>
        <EcoWorld />
      </View>
    </View>
  );
}

export default World;
