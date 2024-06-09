import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="world" options={{ headerTitle: '', headerBackTitleVisible: false, headerTintColor: 'black', headerStyle: {backgroundColor: '#F7F2EE'}}}/>
      <Stack.Screen name="susBall" options={{ headerTitle: '', headerBackTitleVisible: false, headerTintColor: 'black', headerStyle: {backgroundColor: '#F7F2EE'}}}/>

    </Stack>
  );
}
