import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, Pressable, TextInput, ScrollView, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import useLoadAnimals from "@/hooks/useLoadAnimals";
import EcoWorld from "@/assets/svgs/ecoworld";
import { Wayne } from "@/assets/svgs/wayne";
import { CaptainJef } from "@/assets/svgs/captainJef";
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import getAnimalSpeech from "@/helpers/getAnimalSpeech";
import talkToAnimal from "@/helpers/talkToAnimal";

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
  const [currentTalkingAnimal, setCurrentTalkingAnimal] = useState<string>()
  const [response , setResponse] = useState<string>('')
  const convoBottomSheetRef = useRef<BottomSheet>(null)
  const [message, setMessage] = useState<string>()
  const [isLoadingAIText, setIsLoadingAIText] = useState<Boolean>()
  const [isSheetOpen, setIsSheetOpen] = useState<Boolean>(false)
  
  // Bottom Sheet management
  const handleSheetOpen = () => {
    convoBottomSheetRef.current?.expand()
    setIsSheetOpen(true)
  }
  const handleTextActive = () => convoBottomSheetRef.current?.snapToPosition("80%") 
  // when user taps animal
  const handleTalkingAnimal = async (animal: string) => {
    setCurrentTalkingAnimal(animal)
    handleSheetOpen()
    let result: string = await getAnimalSpeech(animal)
    setResponse(result)
  } 
  const handleSendMessage = async(animal: string, message: string) => {
    setIsLoadingAIText(true)
    let result: string = await talkToAnimal(animal, message)
    setResponse(result)
    setIsLoadingAIText(false)
  }

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
              <Pressable key={animal.id} onPress={() => handleTalkingAnimal(animal.name)} style={{ height: 70, width: 70, position: 'absolute', zIndex: 3, top: wayneY, right: wayneX }}>
                <View>
                  <Wayne />
                </View>
              </Pressable>
            );
          }
          if (animal.name === "captain jef") {
            let captainJefX = randomIntFromInterval(100, 300)
            let captainJefY = randomIntFromInterval(150, 250)
            newAnimalRender.push(
              <Pressable key={animal.id} onPress={() => handleTalkingAnimal(animal.name)} style={{ height: 70, width: 70, position: 'absolute', zIndex: 1, top: captainJefY, right: captainJefX }}>
                <View>
                  <CaptainJef />
                </View>
              </Pressable>
            );
          }
        });

        setAnimalRender(newAnimalRender);
      }
    }
    fetchAnimals();
  }, []);


  return (
    <GestureHandlerRootView style={{ padding: 10 , height: "100%", position: 'relative' }}>
      {isSheetOpen == true ? null : animalRender}
      <View style={{ height: 400, width: "100%", position: 'absolute', left: 10, top: 100}}>
        <EcoWorld />
      </View>

      <BottomSheet ref={convoBottomSheetRef} enablePanDownToClose={true} index={-1} snapPoints={["100%"]} onClose={()=> {
        setIsSheetOpen(false)
        Keyboard.dismiss()
      }}>
          <View style={{flex:1, padding: 10,}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{height:50, flex: 1}}>
                {currentTalkingAnimal == 'wayne' ? <Wayne/> : null}
                {currentTalkingAnimal == 'captain jef' ? <CaptainJef/> : null}
              </View>
              <Text style={{flex: 4}}>
                {isLoadingAIText == true ? "Loading..." : response  }
              </Text>
            </View>

          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
            <TextInput onChangeText={setMessage} onFocus={() => handleTextActive } style={{width:"100%", height: 43, borderWidth: 1, borderStyle:"solid", borderRadius: 5, borderColor: "black", color: "black", paddingLeft: 8}} />
            <Pressable style={{
              height: 54,
              marginTop: 10,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#272727",
              borderRadius: 10}} onPress={() => handleSendMessage(currentTalkingAnimal!, message!)}>
                  <Text style ={{color:'white'}}>Send</Text>
              </Pressable>
          </KeyboardAvoidingView>

          </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

export default World;
