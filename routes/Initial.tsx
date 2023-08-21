import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboard from "../screens/initial/Onboard";
import Setup from "../screens/initial/Setup";

export type InitialStackPareams = {
  Onboard: undefined;
  Setup: undefined;
};
const Stack = createNativeStackNavigator<InitialStackPareams>();
const InitialStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboard"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboard" component={Onboard} />
      <Stack.Screen name="Setup" component={Setup} options={{
        animation: "fade",
        animationDuration: 500
      }} />
    </Stack.Navigator>
  );
};
export default InitialStack;
