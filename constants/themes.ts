import {
  adaptNavigationTheme,
  MD3DarkTheme,
  MD3LightTheme,
  MD3Theme,
} from "react-native-paper";
import {
  DefaultTheme as NavigationLightTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import deepmerge from "deepmerge";
import colors from "./colors";

const PaperLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: colors.primary,
    secondary: colors.secondary,
    text: "red",
    // primaryDark: colors.primaryDark,
    error: colors.error,
    background: colors.background.primaryLight,
    onBackground: colors.background.primaryLight,
    surface: colors.background.primaryLight,
    // onSurface: colors.background.primaryLight,
    backgrounds: {
      primary: colors.background.primaryLight,
    },
    defaults: {
      ...colors.default,
    },
  },
};
const PaperDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    background: colors.background.primaryDark,
    onBackground: colors.background.primaryDark,
    surface: colors.background.primaryDark,
    // onSurface: colors.background.primaryDark,
    text: colors.default.whiteOne,
    backgrounds: {
      primary: colors.background.primaryDark,
    },
    defaults: {
      ...colors.default,
    },
  },
};

//   const { LightTheme: NavLightTheme, DarkTheme: NavDarkTheme } =
//   adaptNavigationTheme({
//     light: NavigationLightTheme,
//     dark: NavigationDarkTheme,
//   });
export const CombinedLightTheme = deepmerge(
  PaperLightTheme,
  NavigationLightTheme
);
export const CombinedDarkTheme = deepmerge(PaperDarkTheme, NavigationDarkTheme);

export type AppTheme = typeof CombinedLightTheme | typeof CombinedDarkTheme;
