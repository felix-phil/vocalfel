import React, { useEffect, useState } from "react";
import AppStack from "./AppStack";
import InitialStack from "./Initial";
import { ActivityIndicator, StatusBar, View } from "react-native";
import { useAppDispatch, useAppSelector, useAppTheme } from "../hooks";
import { setOnboard } from "../store/features/initial";
import { useThemePreferenceContext } from "../context/ThemePreferenceContext";

const RootNavigation = () => {
  const [loading, setLoading] = useState(true);
  const theme = useAppTheme();
  const { isThemeDark } = useThemePreferenceContext();

  const dispatch = useAppDispatch();
  const onboardpassed = useAppSelector((state) => state.initial.onboardpassed);
  useEffect(() => {
    (async () => {
      await dispatch(setOnboard()).unwrap();
      setLoading(false);
    })();
  }, []);
  if (loading) {
    return (
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={"large"} color={theme.colors.primary} />
      </View>
    );
  }
  return (
    <React.Fragment>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={isThemeDark ? "light-content" : "dark-content"}
      />
      {onboardpassed ? <AppStack /> : <InitialStack />}
    </React.Fragment>
  );
};

export default RootNavigation;
