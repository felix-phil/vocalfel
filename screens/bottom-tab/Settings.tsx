import {
  BackHandler,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { List } from "react-native-paper";
import { useAppTheme } from "../../hooks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TabParamsType } from "../../routes/BottomTab";
import Animated, { FadeInDown, SlideInLeft } from "react-native-reanimated";
import { useIsFocused } from "@react-navigation/native";

type IProp = NativeStackScreenProps<TabParamsType, "Settings">;

// const ListItem = Animated.createAnimatedComponent(List.Item)
const Settings = ({ navigation }: IProp) => {
  const theme = useAppTheme();
  const isFocused = useIsFocused();
  const handleExitApp = () => {
    BackHandler.exitApp();
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.logo}>
        <Image
          resizeMode="cover"
          style={styles.img}
          source={require("../../assets/icon-invert.png")}
        />
      </View>
      <ScrollView contentContainerStyle={styles.menus}>
        <Animated.View
          entering={SlideInLeft.duration(500)}
          key={String(isFocused) + "themes"}
        >
          <List.Item
            onPress={() => navigation?.getParent()?.navigate("ThemeSetting")}
            style={styles.listItem}
            title="Themes"
            titleStyle={styles.title}
            left={(props) => (
              <List.Icon
                {...props}
                style={styles.icon}
                icon={"palette-outline"}
                color={theme.colors.text}
              />
            )}
          />
        </Animated.View>
        <Animated.View
          entering={SlideInLeft.duration(600)}
          key={String(isFocused) + "recents"}
        >
          <List.Item
            onPress={() => navigation.getParent()?.navigate("Recents")}
            style={styles.listItem}
            title="Recents"
            titleStyle={styles.title}
            left={(props) => (
              <List.Icon
                {...props}
                style={styles.icon}
                icon={"clock-time-nine-outline"}
                color={theme.colors.text}
              />
            )}
          />
        </Animated.View>
        <Animated.View
          entering={SlideInLeft.duration(700)}
          key={String(isFocused) + "bookmarks"}
        >
          <List.Item
            onPress={() => navigation.getParent()?.navigate("Bookmarks")}
            style={styles.listItem}
            title="Bookmarks"
            titleStyle={styles.title}
            left={(props) => (
              <List.Icon
                {...props}
                style={styles.icon}
                icon={"heart-outline"}
                color={theme.colors.text}
              />
            )}
          />
        </Animated.View>
        <Animated.View
          entering={SlideInLeft.duration(800)}
          key={String(isFocused) + "notes"}
          // sharedTransitionTag="notes"
        >
          <List.Item
            onPress={() => navigation.getParent()?.navigate("Notes")}
            style={styles.listItem}
            title="Notes"
            titleStyle={styles.title}
            left={(props) => (
              <List.Icon
                {...props}
                style={styles.icon}
                icon={"notebook-outline"}
                color={theme.colors.text}
              />
            )}
          />
        </Animated.View>
        <Animated.View
          entering={SlideInLeft.duration(900)}
          key={String(isFocused) + "help"}
        >
          <List.Item
            onPress={() => navigation.getParent()?.navigate("Help")}
            style={styles.listItem}
            title="Help"
            titleStyle={styles.title}
            left={(props) => (
              <List.Icon
                {...props}
                style={styles.icon}
                icon={"help-circle-outline"}
                color={theme.colors.text}
              />
            )}
          />
        </Animated.View>
        <Animated.View
          entering={SlideInLeft.duration(1000)}
          key={String(isFocused) + "about"}
        >
          <List.Item
            onPress={() => navigation.getParent()?.navigate("About")}
            style={styles.listItem}
            title="About"
            titleStyle={styles.title}
            left={(props) => (
              <List.Icon
                {...props}
                style={styles.icon}
                icon={"information-outline"}
                color={theme.colors.text}
              />
            )}
          />
        </Animated.View>
        {Platform.OS !== "ios" && (
          <Animated.View
            entering={FadeInDown.delay(900)}
            key={String(isFocused) + "exit"}
          >
            <List.Item
              onPress={handleExitApp}
              style={styles.listItem}
              title="Exit"
              titleStyle={[styles.title, { color: theme.colors.error }]}
              left={(props) => (
                <List.Icon
                  {...props}
                  style={styles.icon}
                  icon={"close"}
                  color={theme.colors.error}
                />
              )}
            />
          </Animated.View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingVertical: "5%",
    gap: 6,
  },
  menus: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 15,
    // marginHorizontal: "5%",
  },
  logo: {
    width: 50,
    height: 50,
    marginHorizontal: "7%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "Secondary-700",
    fontWeight: "700",
    fontSize: 18,
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
});
