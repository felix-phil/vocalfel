import { NavigationContainer } from "@react-navigation/native";
import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Provider as PaperThemeProvider } from "react-native-paper";
import { CombinedDarkTheme, CombinedLightTheme } from "../../constants/themes";
import {
  ThemePreferenceContext,
  ThemePreferenceContextType,
} from "../../context/ThemePreferenceContext";
import { Appearance, useColorScheme } from "react-native";
import colors from "../../constants/colors";
import {
  changeUserColorTheme,
  getUserColorTheme,
  getUserTheme,
} from "../../helpers/storages";

const ThemeAndNavigationProvider: FC<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const systemScheme = useColorScheme();
  const [isThemeDark, setIsThemeDark] = useState<boolean>(
    systemScheme === "dark" ? true : false
  );
  const [colorTheme, setColorTheme] = useState(colors.primary);
  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const changeColorTheme = useCallback(async (color: string) => {
    try {
      await changeUserColorTheme(color);
      setColorTheme(color);
    } catch (error) {
      // console.log("error getting color theme: ", error);
    }
  }, []);

  const themePrefrenceMemo = useMemo<ThemePreferenceContextType>(
    () => ({
      isThemeDark,
      colorTheme,
      toggleTheme,
      changeColorTheme,
    }),
    [isThemeDark, toggleTheme, colorTheme, changeColorTheme]
  );
  // useEffect(() => {
  //   Appearance.addChangeListener((prefrence) => {
  //     if (prefrence.colorScheme === "dark") {
  //       setIsThemeDark(true);
  //     } else {
  //       setIsThemeDark(false);
  //     }
  //   });
  // }, []);
  useEffect(() => {
    (async () => {
      const storedTheme = await getUserTheme();
      if (storedTheme) {
        setIsThemeDark(storedTheme == "dark" ? true : false);
      } else {
        setIsThemeDark(systemScheme == "dark" ? true : false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const colorThemeStored = await getUserColorTheme();
        setColorTheme(colorThemeStored);
      } catch (error) {
        // console.log("error getting color theme: ", error);
      }
    })();
  }, []);

  CombinedLightTheme.colors.primary = colorTheme;
  CombinedDarkTheme.colors.primary = colorTheme;
  const theme = isThemeDark ? CombinedDarkTheme : CombinedLightTheme;
  return (
    <ThemePreferenceContext.Provider value={themePrefrenceMemo}>
      <PaperThemeProvider theme={theme}>
        <NavigationContainer theme={theme}>{children}</NavigationContainer>
      </PaperThemeProvider>
    </ThemePreferenceContext.Provider>
  );
};
export default ThemeAndNavigationProvider;
