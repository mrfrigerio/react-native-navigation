import { useRoute, useNavigation } from "@react-navigation/native";
import React from "react";

import { View, Text, Button } from "react-native";

// import { Container } from './styles';
type ParamsProps = {
  name: string;
};

export const ScreenB: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { name } = route.params as ParamsProps;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
        }}
      >
        {name}
      </Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};
