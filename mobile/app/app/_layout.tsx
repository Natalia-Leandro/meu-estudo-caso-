import { Stack } from "expo-router";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { useEffect } from "react";
import { StatusBar } from "react-native";

// Tema global
const lightPinkPurpleTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffeaf3",
    surface: "#fff",
    primary: "#8a2be2", 
    text: "#222",
    onSurface: "#222",
    onBackground: "#222",
  },
};

export default function RootLayout() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("#8a2be2"); 
  }, []);

  return (
    <PaperProvider theme={lightPinkPurpleTheme}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#8a2be2" }, 
          headerTintColor: "#fff",                     
          headerTitleAlign: "center",                 
          headerTitle: "Lista de Produtos",            
          contentStyle: { backgroundColor: "#ffeaf3" },
        }}
      />
    </PaperProvider>
  );
}
