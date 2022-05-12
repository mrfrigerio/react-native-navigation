import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name="screenA"
        component={ScreenA}
        options={{
          drawerLabel: "Tela principal",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="screenB"
        component={ScreenB}
        options={{
          drawerLabel: "Sair",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="logout" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
}
