import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { EcoWorldButton, Dice, QrCodeButton } from "@/assets/svgs/svgComponents"
import { Link } from 'expo-router';
import Auth from "@/components/auth";
import { supabase } from '@/components/auth'
import { Session } from '@supabase/supabase-js'
import uploadImage from "@/hooks/useUpload";


const App = () => {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  console.log(session?.user.id)
  if(!session){
    return (
      <Auth/>
    )
  }
  

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

        <Pressable onPress={uploadImage}>
          <Text>Test Upload</Text>
        </Pressable>
    </SafeAreaView>
  );
};

export default App;
