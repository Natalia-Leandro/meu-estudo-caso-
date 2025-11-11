import { Stack } from "expo-router";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { StatusBar } from "react-native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1976d2",
    background: "#f5f5f5",
  },
};

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#1976d2" barStyle="light-content" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#1976d2" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
    </PaperProvider>
  );
}
