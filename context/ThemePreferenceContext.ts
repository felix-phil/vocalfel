import { useContext, createContext } from "react";
import colors from "../constants/colors";

export type ThemePreferenceContextType = {
  isThemeDark: boolean;
  colorTheme: string;
  toggleTheme: () => void;
  changeColorTheme: (color: string) => void | Promise<void>;
};
export const ThemePreferenceContext = createContext<ThemePreferenceContextType>(
  {
    isThemeDark: false,
    colorTheme: colors.primary,
    toggleTheme: () => {},
    changeColorTheme: () => {},
  }
);

export const useThemePreferenceContext = () =>
  useContext(ThemePreferenceContext);
