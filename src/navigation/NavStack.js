import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "../screens/MainPage";
import LinkPage from "../screens/LinkPage";

const Stack = createNativeStackNavigator();

const NavStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="MainPage">
        <Stack.Screen name="Default Page" component={MainPage} />
        <Stack.Screen name="Link Page" component={LinkPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavStack;
