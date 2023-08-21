import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomePage from "../screens/bottom-tab/HomePage";
import Search from "../screens/bottom-tab/Search";
import Settings from "../screens/bottom-tab/Settings";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppTheme } from "../hooks";
import { Easing, View } from "react-native";
import { TouchableRipple } from "react-native-paper";

export type TabParamsType = {
  HomePage: undefined;
  Search: {
    initialWord?: string;
  };
  Settings: undefined;
};
const Tab = createMaterialBottomTabNavigator<TabParamsType>();
const BottomTab = () => {
  const theme = useAppTheme();
  theme.colors.secondaryContainer = "transparent";
  return (
    <Tab.Navigator
      labeled={false}
      compact={true}
      barStyle={{
        backgroundColor: theme.colors.background,
        width: "100%",
        overflow: "hidden",
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
      }}
      sceneAnimationEasing={Easing.bounce}
      sceneAnimationEnabled
      sceneAnimationType="shifting"
      
      shifting
      theme={theme}
      screenOptions={{}}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              {...props}
              color={props.focused ? theme.colors.primary : theme.colors.text}
              name={props.focused ? "home" : "home-outline"}
              size={26}
            />
          ),
          // tabBarIcon: "home",
          title: "Home",
          tabBarAccessibilityLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: (props) => (
            <Feather
              {...props}
              color={props.focused ? theme.colors.primary : theme.colors.text}
              name="search"
              size={26}
            />
          ),
          // tabBarIcon: "home",
          title: "Search",
          tabBarAccessibilityLabel: "Search Dictionary",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              {...props}
              color={props.focused ? theme.colors.primary : theme.colors.text}
              name={props.focused ? "view-dashboard" : "view-dashboard-outline"}
              size={26}
            />
          ),
          tabBarLabel: "Preferences",
          title: "Preferences",
          tabBarAccessibilityLabel: "Preferences",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
