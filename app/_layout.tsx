import { Stack } from "expo-router";
import Index from "./index";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    // <Stack>
    //   <Stack.Screen name="index" />
    // </Stack>
    <GestureHandlerRootView>
      <Index />
    </GestureHandlerRootView>

  );
}
