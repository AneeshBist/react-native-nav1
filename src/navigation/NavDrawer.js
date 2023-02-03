import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainPage from "../screens/MainPage";
import LinkPage from "../screens/LinkPage";

const Drawer = createDrawerNavigator();

const NavDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main Page"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#d1eac3",
            width: 300,
          },
        }}
      >
        <Drawer.Screen name="Main Page" component={MainPage} />
        <Drawer.Screen name="Link Page" component={LinkPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default NavDrawer;
