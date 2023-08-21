import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./BottomTab";
import Recents from "../screens/app/Recents";
import ThemeSetting from "../screens/app/ThemeSetting";
import Notes from "../screens/app/Notes";
import Bookmarks from "../screens/app/Bookmarks";
import { RealmContext } from "../models";
import { Realm } from "@realm/react";
import EditNote from "../screens/app/EditNote";
import About from "../screens/app/About";
import Legal from "../screens/app/Legal";
import PrivacyPolicy from "../screens/app/PrivacyPolicy";
import Terms from "../screens/app/Terms";
import Help from "../screens/app/Help";

Realm.copyBundledRealmFiles();

export type AppStackParamType = {
  BottomTab: undefined;
  Recents: undefined;
  ThemeSetting: undefined;
  Notes: undefined;
  Bookmarks: undefined;
  EditNote: {
    noteId: string;
    newNote?: boolean;
  };
  Help: undefined;
  About: undefined;
  Legal: undefined;
  PrivacyPolicy: undefined;
  Terms: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamType>();
const AppStack = () => {
  return (
    <RealmContext.RealmProvider>
      <Stack.Navigator
        initialRouteName="BottomTab"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          animationDuration: 400,
        }}
      >
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Recents" component={Recents} />
        <Stack.Screen
          name="ThemeSetting"
          component={ThemeSetting}
          options={{
            animation: "slide_from_bottom",
            presentation: "modal",
          }}
        />
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="Bookmarks" component={Bookmarks} />
        <Stack.Screen name="EditNote" component={EditNote} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Legal" component={Legal} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Terms" component={Terms} />
      </Stack.Navigator>
    </RealmContext.RealmProvider>
  );
};

export default AppStack;
