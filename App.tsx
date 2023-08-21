import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme, LogBox } from "react-native";
import AnimatedAppLoader from "./components/providers/AnimatedAppLoader";
import { Provider as StoreProvider } from "react-redux";
import ThemeAndNavigationProvider from "./components/providers/ThemeAndNavigationProvider";
import RootNavigation from "./routes";
import store from "./store";

LogBox.ignoreLogs(["BSON: For React Native"]);
const Main = () => {
  return (
    <StoreProvider store={store}>
      <ThemeAndNavigationProvider>
        <RootNavigation />
      </ThemeAndNavigationProvider>
    </StoreProvider>
  );
};

const App = () => {
  const splashImage = require("./assets/splash.png");
  return (
    <AnimatedAppLoader image={splashImage}>
      <Main />
    </AnimatedAppLoader>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
