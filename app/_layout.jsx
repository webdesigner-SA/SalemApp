import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "#FFFFFF",
        headerStyle: {
          backgroundColor: "#4E046D",
        },
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false, // إخفاء الهيدر العام فوق التابات
        }}
      />
    </Stack>
  );
}