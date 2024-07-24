import "../global.css";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      < Stack >
        <Stack.Screen name="(tabs)"
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="details/[id]"
          options={{
            title: "details",
            headerStyle: {
              backgroundColor: "green"
            }
          }} />
      </Stack >
      <StatusBar style="dark" />
    </>
  );
}
