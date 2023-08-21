import { Animated, Easing, SafeAreaView, StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppDispatch, useAppTheme } from "../../hooks";
import { Button, Text, Title } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { InitialStackPareams } from "../../routes/Initial";
import { markOnboardPass } from "../../helpers/storages";
import { markOnboardPassedStore } from "../../store/features/initial";
import Fade from "../../components/animations/Fade";
import { Realm } from "@realm/react";

type IProps = NativeStackScreenProps<InitialStackPareams, "Setup">;
const Setup = ({ navigation }: IProps) => {
  const theme = useAppTheme();
  const [loading, setLoading] = useState<"idle" | "loading" | "done">("idle");
  const dispatch = useAppDispatch();

  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startRotation = () => {
      Animated.loop(
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: 2000, // Duration of one rotation (in milliseconds)
          useNativeDriver: true,
        })
      ).start();
    };

    startRotation();
  }, [rotateValue]);

  const spin = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const handleCopy = () => {
    setLoading("loading");
    Realm.copyBundledRealmFiles();
    setLoading("done");
  };
  const handleComplete = () => {
    markOnboardPass().then(() => dispatch(markOnboardPassedStore()));
  };
  let LoadComponent = (
    <MaterialCommunityIcons
      color={theme.colors.primary}
      size={100}
      name={"book-sync-outline"}
    />
  );
  if (loading === "loading") {
    LoadComponent = (
      <Animated.View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: [{ rotate: spin }],
        }}
      >
        <MaterialCommunityIcons
          color={theme.colors.primary}
          size={100}
          name={"sync"}
        />
      </Animated.View>
    );
  } else if (loading === "done") {
    LoadComponent = (
      <MaterialCommunityIcons
        color={"green"}
        size={100}
        name={"check-circle-outline"}
      />
    );
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.iconWrapper}>
        <View style={[styles.icon, { backgroundColor: theme.colors.card }]}>
          {LoadComponent}
        </View>
      </View>
      <Fade
        keyChange={loading}
        duration={300}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title
          adjustsFontSizeToFit
          style={[styles.title, { color: theme.colors.defaults.blackOne }]}
        >
          {loading === "done"
            ? "You're set"
            : loading === "loading"
            ? "Setting Up"
            : "Almost Done"}
        </Title>
        <Text
          adjustsFontSizeToFit
          style={[styles.subtitle, { color: theme.colors.text }]}
        >
          {loading === "done"
            ? "Congratulations! You are now fully equipped to embark on your vocabulary journey."
            : loading === "loading"
            ? "Please wait while we set up your dictionary. Soon, you'll embark on a seamless journey into a world of words with VocalFel!"
            : "VocalFel wants to setup the dictionary, this is a one time operation"}
        </Text>
      </Fade>
      {loading === "done" ? (
        <Button
          mode="contained"
          onPress={handleComplete}
          style={styles.iconButton}
          icon="check-circle-outline"
        >
          Continue
        </Button>
      ) : (
        <Button
          mode="contained"
          onPress={handleCopy}
          style={styles.iconButton}
          icon="sync"
          disabled={loading === "loading"}
        >
          Complete
        </Button>
      )}
    </SafeAreaView>
  );
};

export default Setup;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  progress: {
    // alignSelf: "flex-start"
    width: "100%",
  },
  iconWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    borderRadius: 360,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
    // position: "absolute",
  },
  title: {
    fontFamily: "Secondary-700",
    fontWeight: "900",
    fontSize: 25,
    letterSpacing: 2,
    marginTop: "10%",
    // textTransform: "uppercase"
  },
  subtitle: {
    marginTop: "2%",
    marginHorizontal: "3%",
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Primary-500",
  },
  iconButton: {
    marginTop: "20%",
  },
});
