import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useThemePreferenceContext } from "../../../context/ThemePreferenceContext";
import { useAppTheme } from "../../../hooks";
import { IconButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { hexToRGB } from "../../../helpers";
import { changeUserTheme } from "../../../helpers/storages";

const ModeToggle = () => {
  const { isThemeDark, toggleTheme } = useThemePreferenceContext();
  const theme = useAppTheme();
  
  const handleToggleTheme = async() => {
    await changeUserTheme(isThemeDark ? "light": "dark")
    toggleTheme()
  }
  return (
    <TouchableWithoutFeedback onPress={handleToggleTheme} style={styles.wrapper}>
      <View
        style={[
          styles.content,
          {
            backgroundColor: isThemeDark
              ? theme.colors.defaults.lightBg
              : theme.colors.defaults.darkBg,
          },
        ]}
      >
        <IconButton
          style={styles.icon}
          size={30}
          containerColor={isThemeDark ? hexToRGB("#000000", 0.05): hexToRGB("#ffffff", 0.2)}
          iconColor={
            isThemeDark
              ? theme.colors.defaults.darkBg
              : theme.colors.defaults.lightBg
          }
          icon={(props) => (
            <Ionicons
              {...props}
              name={isThemeDark ? "ios-sunny-outline" : "ios-moon-outline"}
            />
          )}
        />
        <Text
          style={[
            styles.textTitle,
            {
              color: isThemeDark
                ? theme.colors.defaults.darkBg
                : theme.colors.defaults.lightBg,
            },
          ]}
        >
          {isThemeDark ? "Light Mode" : "Dark Mode"}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ModeToggle;

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  content: {
    paddingVertical: "2%",
    width: "95%",
    borderRadius: 45,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "2%",
  },
  textTitle: {
    textTransform: "uppercase",
    fontFamily: "Primary-400",
    fontSize: 16,
    marginRight: "auto",
  },
  icon: {
    marginRight: "auto",
  },
});
