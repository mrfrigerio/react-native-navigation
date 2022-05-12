import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      <Screen
        name="screenA"
        component={ScreenA}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="screenB"
        component={ScreenB}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
