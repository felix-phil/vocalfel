import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../constants/colors";
// import dictionary from "../data/dictionary.json";
import { WordDetails } from "../types";

type ThemeStored = "light" | "dark";
export const changeUserTheme = async (theme: ThemeStored) => {
  await AsyncStorage.setItem("theme", theme);
};

export const getUserTheme = async (): Promise<ThemeStored | undefined> => {
  const theme = await AsyncStorage.getItem("theme");
  return theme ? (theme as ThemeStored) : undefined;
};

export const changeUserColorTheme = async (colorTheme: string) => {
  await AsyncStorage.setItem("colorTheme", colorTheme);
};

export const getUserColorTheme = async (): Promise<string> => {
  const colorTheme = await AsyncStorage.getItem("colorTheme");
  return colorTheme ? colorTheme : colors.primary;
};
export const markOnboardPass = async () => {
  await AsyncStorage.setItem("onboard", "true");
};
export const checkOnboard = async () => {
  const passed = await AsyncStorage.getItem("onboard");
  return passed ? true : false;
};

type DayWord = {
  word: string;
  expiry: string;
};
export const getValidDailyWord = async () => {
  try {
    const dayWord = await AsyncStorage.getItem("dayWord");
    if (dayWord) {
      const jsonDayWord = JSON.parse(dayWord) as DayWord;

      if (new Date(jsonDayWord.expiry).getTime() > new Date().getTime()) {
        return jsonDayWord.word;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const storeDailyWord = async (word: string) => {
  try {
    const now = new Date();
    const next24Hour = new Date(now.setHours(now.getHours() + 24));
    await AsyncStorage.setItem(
      "dayWord",
      JSON.stringify({ word, expiry: next24Hour.toISOString() })
    );
  } catch (error) {
    throw error;
  }
};
