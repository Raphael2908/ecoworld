import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View, AppState, Modal, Pressable, Text, TextInput } from 'react-native'
import { supabase } from '../helpers/supabase'
import { SafeAreaView } from 'react-native-safe-area-context'

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export { supabase }
export default function Auth() {
    const [modalVisible, setModalVisible] = useState(true);
    const [name, setName] = useState<string>()
    async function anonSignIn (){
        const { data, error } = await supabase.auth.signInAnonymously()
        const { error: insertError } = await supabase.from('rolls').insert({
            user_id: data.user?.id,
            rolls: 0
        })
        const { error: insertNameError } = await supabase.from('profiles').insert({user_id: data.user?.id, name: name})
      console.log(data, error, insertError, insertNameError )
    }

    return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{flex:1, justifyContent: 'center'}}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please tell us your name!</Text>
            <View style={{width:"100%", gap:10}}>
                <TextInput onChangeText={setName} style={{width:"100%", height: 43, borderWidth: 1, borderStyle:"solid", borderRadius: 5, borderColor: "black", color: "black"}} placeholderTextColor={"white"} placeholder='Name'/>
            </View>
            <Pressable style={{ 
            height: 54,
            width: "100%",
            justifyContent: "center",
            alignItems: "center", 
            backgroundColor: "#272727",
            borderRadius: 10}} onPress={anonSignIn}>
                <Text style ={{color:'white'}}>See your Ecoworld</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
    );    
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      gap:10,
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

  
