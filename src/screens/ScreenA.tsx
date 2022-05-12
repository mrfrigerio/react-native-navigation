import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ScreenA: React.FC = () => {
  const navigation = useNavigation();
  function openScreen() {
    navigation.navigate("screenB", { name: "Ragnelli" });
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button title="Go to Screen B" onPress={openScreen} />
    </View>
  );
};
