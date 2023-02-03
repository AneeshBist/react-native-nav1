import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import MainPage from "../screens/MainPage";
import LinkPage from "../screens/LinkPage";

const Tab = createBottomTabNavigator();

const NavTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;

            if (route.name === "Main Page") {
              iconName = "ios-analytics";
            } else if (route.name === "Link Page") {
              iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Default Page" component={MainPage} />
        <Tab.Screen name="Link Page" component={LinkPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavTab;
