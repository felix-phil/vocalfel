import { SafeAreaView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppTheme } from "../../hooks";
import { IconButton, Text, Title } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { InitialStackPareams } from "../../routes/Initial";
import Fade from "../../components/animations/Fade";

const onboardData = [
  {
    title: "Your Offline Dictionary",
    subtitle:
      "Unlock the power of words with VocalFel! Dive into a vast collection of definitions, effortlessly add personal notes, and curate your own list of favorites for quick access anytime, anywhere.",
    icon: "cloud-off-outline",
  },
  {
    title: "Your Vocabulary Companion",
    subtitle:
      "Enhance your language journey with VocalFel! Explore an extensive word bank, effortlessly jot down contextual notes, and build a personalized library of favorites to expand your vocabulary in a fun and efficient way",
    icon: "book-check-outline",
  },
];
type IProps = NativeStackScreenProps<InitialStackPareams, "Onboard">;
const Onboard = ({ navigation }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useAppTheme();
  const handleGoToNext = () => {
    if (currentIndex < onboardData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigation.navigate("Setup");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Fade keyChange={currentIndex} style={styles.safeArea}>
        <View style={[styles.icon, { backgroundColor: theme.colors.card }]}>
          <MaterialCommunityIcons
            color={theme.colors.primary}
            size={100}
            name={onboardData[currentIndex].icon as any}
          />
        </View>
        <Title
          adjustsFontSizeToFit
          style={[styles.title, { color: theme.colors.text }]}
        >
          {onboardData[currentIndex]?.title}
        </Title>
        <Text
          adjustsFontSizeToFit
          style={[styles.subtitle, { color: theme.colors.text }]}
        >
          {onboardData[currentIndex].subtitle}
        </Text>
        <IconButton
          size={50}
          onPress={handleGoToNext}
          style={styles.iconButton}
          containerColor={theme.colors.primary}
          icon="chevron-right"
          iconColor={theme.colors.defaults.whiteOne}
        />
      </Fade>
    </SafeAreaView>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    borderRadius: 360,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
  },
  title: {
    fontFamily: "Secondary-700",
    fontWeight: "900",
    fontSize: 25,
    letterSpacing: 2,
    marginTop: "10%",
    textAlign: "center",
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
