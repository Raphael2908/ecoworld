import React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { EcoWorldButton, Dice, QrCodeButton } from "@/assets/svgs/svgComponents"
import { Link } from 'expo-router';


const App = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F2EE' }}>
      <Text style={{flexShrink: 1, fontSize: 40, color: "black", alignSelf: 'center' }}>EcoWorld</Text>
      <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 50}}>
          <Link href="/world">
            <EcoWorldButton/>
          </Link>
      </View>

       {/* Buttons */}
       <View style={{ flex: 1, position: 'absolute', bottom: 20, right: 20, gap: 10}}>
          <Link href="/susBall">
            <View style={{flex: 1, alignItems: 'center', gap: 10}}>
              <Text>Claim reward!</Text>
              <Dice/>
            </View>
          </Link>

          <Pressable style={{flex: 1, alignItems: 'center', gap: 10}}>
            <Text>Tap to scan!</Text>
            <QrCodeButton/>
          </Pressable>
        </View>
    </SafeAreaView>
  );
};

export default App;
