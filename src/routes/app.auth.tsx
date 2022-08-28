import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
import { Register } from "../screens/Register";
import { useTheme } from "native-base";
import { NavTabBottom } from "../components/NavTabBottom";
import { Profile } from "../screens/Profile";
import { Calendar } from "../screens/Calendar";

const { Navigator: NavigatorStack, Screen: ScreenStack } =
  createNativeStackNavigator();

const { Navigator: NavigatorTab, Screen: ScreenTab } =
  createBottomTabNavigator();

// export function NavigatorStackComponent() {
//   return (
//     // <NavigationContainer>
//     <NavigatorStack
//       screenOptions={{ headerShown: false }}
//       initialRouteName="Home"
//     >
//       {/* <ScreenStack name="home" component={Home} /> */}
//       <ScreenStack name="register" component={Register} />
//       <ScreenStack name="details" component={Details} />
//     </NavigatorStack>
//     // </NavigationContainer>
//   );
// }

export function NavigatorTabComponent() {
  const { colors } = useTheme();

  return (
    <NavigatorTab
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      defaultScreenOptions={{
        tabBarInactiveBackgroundColor: `${colors.gray[500]}`,
      }}
      tabBar={props => <NavTabBottom {...props} />}
    >
      <ScreenTab name="home" component={Home} />
      <ScreenTab name="register" component={Register} />
      <ScreenTab name="profile" component={Profile} />
      <ScreenTab name="details" component={Details} />
      <ScreenTab name="calendar" component={Calendar} />
    </NavigatorTab>
  );
}

export function AppAuth() {
  return <NavigatorTabComponent />;
}
