import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React, { FC } from "react";
import { Checkbox } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import colors from "../../../constants/colors";
import { useThemePreferenceContext } from "../../../context/ThemePreferenceContext";

interface ColorBoxProps extends TouchableOpacityProps {
  color: string;
  active?: boolean;
}
const ColorBox: FC<ColorBoxProps> = ({ color, active, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} {...props}>
      <View style={[styles.box, { backgroundColor: color }]}>
        <Checkbox.IOS
          color="#ffffff"
          status={active ? "checked" : "unchecked"}
        />
      </View>
    </TouchableOpacity>
  );
};
const ColorThemes = () => {
  const { changeColorTheme, colorTheme } = useThemePreferenceContext();
  return (
    <FlatList
      data={colors.themeColors}
      numColumns={5}
      centerContent
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.colorsList}
      renderItem={({ item }) => (
        <ColorBox
          color={item}
          active={item === colorTheme}
          onPress={() => changeColorTheme(item)}
        />
      )}
    />
  );
};

export default ColorThemes;

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 7,
    marginVertical: 10
  },
  colorsList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
});
