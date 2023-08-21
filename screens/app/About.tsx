import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import AppHeader from "../../components/layouts/AppHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamType } from "../../routes/AppStack";
import { Divider, List, Text } from "react-native-paper";
import { useAppTheme } from "../../hooks";
import { hexToRGB } from "../../helpers";

type IProp = NativeStackScreenProps<AppStackParamType, "About">;
const About = ({ navigation }: IProp) => {
  const theme = useAppTheme();
  return (
    <View style={styles.wrapper}>
      <AppHeader title={"About"} backAction={navigation.goBack}></AppHeader>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require("../../assets/icon-invert.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.header}>About VocalFel Dictionary App</Text>
          <Text style={styles.paragraph}>
            Welcome to VocalFel, your trusted companion in the world of words!
            At VocalFel, we're passionate about language and committed to
            enhancing your understanding, communication, and appreciation of
            words. Whether you're a language enthusiast, a student, a writer, or
            someone looking to expand their vocabulary, our app is designed to
            empower you on your linguistic journey.
          </Text>
          <Text style={styles.subHeader}>Our Mission</Text>
          <Text style={styles.paragraph}>
            Our mission is to provide you with a seamless and enriching
            experience as you explore the vast landscape of language. We believe
            that words have the power to connect, express, and inspire. With
            VocalFel, we aim to make this journey engaging and insightful,
            guiding you through the intricacies of language and helping you
            become a more effective communicator.
          </Text>
          <Text style={styles.subHeader}>Features and Benefits</Text>
          <Text style={styles.paragraph}>
            - Comprehensive Definitions: Unlock the meanings of words with
            detailed definitions, allowing you to grasp their nuances and
            contexts. - Synonyms and Antonyms: Discover a world of related
            words, from synonyms that amplify your expression to antonyms that
            provide contrast and depth. - Real-World Usage: Immerse yourself in
            the practicality of language with authentic examples showcasing how
            words are used in various contexts. - User-Friendly Interface: Our
            intuitive design ensures that you can navigate effortlessly through
            words, meanings, and related content. - Personalization: Tailor your
            experience by adjusting settings like font size, themes, and
            language preferences to suit your needs.
          </Text>
          <Text style={styles.subHeader}>Connect with Us</Text>
          <Text style={styles.paragraph}>
            VocalFel is more than an app; it's a community of language
            enthusiasts. We're dedicated to continuous improvement, and your
            feedback plays a crucial role in shaping the app's future. If you
            have questions, suggestions, or any inquiries, don't hesitate to
            reach out to our dedicated support team. We're here to assist you on
            your journey to discover, learn, and appreciate the beauty of words.
          </Text>
        </View>
        <View style={{ width: "100%" }}>
          <Divider />
        </View>
        <View style={styles.legals}>
          <List.Item onPress={() => navigation.navigate("Terms")} title="Terms of use" />
          <List.Item onPress={() => navigation.navigate("PrivacyPolicy")} title="Privacy Policy" />
        </View>
        <View style={{ width: "100%" }}>
          <Divider />
        </View>
        <View style={styles.footerWrapper}>
          <Text style={styles.footer}>
            This app's dictionary content is curated from WordNet, a lexical
            database for the English language. WordNet is a project developed by
            the Cognitive Science Laboratory at Princeton University. We are
            grateful for their valuable contribution to this app's content.
          </Text>
          <Text style={styles.footer}>
            Thank you for choosing VocalFel. Embark on a language adventure with
            us and let words come alive in ways you've never imagined.\nStay
            curious, stay connected.
          </Text>
          <Text style={styles.footer}>The VocalFel Team</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    paddingHorizontal: "2%",
    alignItems: "center",
  },
  imageWrapper: {
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "Primary-500",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    fontFamily: "Primary-400",
  },
  footerWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  footer: {
    fontSize: 14,
    marginTop: 20,
    color: "gray",
  },
  legals: {
    // paddingHorizontal: "2%",
    alignItems: "center",
  },
});
