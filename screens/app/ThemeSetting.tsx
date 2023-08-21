import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useAppTheme } from "../../hooks";
import { IconButton, Text } from "react-native-paper";
import ModeToggle from "../../components/screens/settings/ModeToggle";
import ColorThemes from "../../components/screens/settings/ColorThemes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamType } from "../../routes/AppStack";
import AppHeader from "../../components/layouts/AppHeader";

type IProps = NativeStackScreenProps<AppStackParamType, "ThemeSetting">;
const ThemeSetting = ({ navigation }: IProps) => {
  const theme = useAppTheme();
  return (
    <View style={styles.wrapper}>
      <View style={{ zIndex: 3 }}>

      <AppHeader
        title="Theme"
        backAction={navigation.goBack}
      ></AppHeader>
      </View>
      <View
        style={[
          styles.overlay,
          StyleSheet.absoluteFill,
          { backgroundColor: theme.colors.backdrop },
        ]}
      ></View>
      {/* <View style={styles.logoAndIcon}>
        <IconButton
          onPress={navigation.goBack}
          containerColor={theme.colors.background}
          size={30}
          icon={"chevron-left"}
          iconColor={theme.colors.primary}
        />
        <View style={styles.logo}>
          <Image
            resizeMode="cover"
            style={styles.img}
            source={require("../../assets/icon-invert.png")}
          />
        </View>
      </View> */}
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <Text style={styles.title}>Mode</Text>
        <View style={styles.toggleCont}>
          <ModeToggle />
        </View>

        <View style={styles.colorTheme}>
          <Text style={styles.title}>Pick a theme</Text>
          <ColorThemes />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  overlay: {
    zIndex: 1,
  },
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 6,
    position: "relative",
  },

  logo: {
    width: 50,
    height: 50,
    // marginHorizontal: "7%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "Primary-600",
    fontWeight: "700",
    fontSize: 25,
    alignSelf: "flex-start",
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: "5%",
  },
  icon: {
    // width: 20,
    // height: 20,
  },
  container: {
    height: "80%",
    width: "95%",
    alignSelf: "center",
    borderRadius: 30,
    zIndex: 2,
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    gap: 15,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginVertical: "auto",
    // flex: 1
  },
  toggleCont: {
    width: "100%",
    alignSelf: "center",
    marginHorizontal: "auto",
  },
  colorTheme: {
    marginTop: "20%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: 15,
  },
  logoAndIcon: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
    zIndex: 2,
  },
});
export default ThemeSetting;
