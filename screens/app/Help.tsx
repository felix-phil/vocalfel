import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppHeader from "../../components/layouts/AppHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamType } from "../../routes/AppStack";
import { Text } from "react-native-paper";
import { useAppTheme } from "../../hooks";

type IProp = NativeStackScreenProps<AppStackParamType, "Help">;
const Help = ({ navigation }: IProp) => {
  const theme = useAppTheme();
  const handleSupportPress = async () => {
    try {
      await Linking.openURL("mailto:devfelixphil@gmail.com");
    } catch (error) {}
  };
  return (
    <View style={styles.wrapper}>
      <AppHeader title={"Help"} backAction={navigation.goBack}></AppHeader>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.header}>
            Welcome to VocalFel Dictionary Help Screen
          </Text>
          <Text style={styles.paragraph}>
            Thank you for choosing "VocalFel," our powerful Dictionary App built
            with love. This help screen is designed to assist you in making the
            most of our app's remarkable features.
          </Text>

          <View style={styles.section}>
            <Text style={styles.subHeader}>Word of the Day</Text>
            <Text style={styles.paragraph}>
              Discover a new word daily with our "Word of the Day" feature.
              Immerse yourself in language and expand your vocabulary. ap "Next"
              to explore a handpicked word's definition and usage every day.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subHeader}>Word Search and Definitions</Text>
            <Text style={styles.paragraph}>
              Searching for a specific word? Our intuitive search bar makes it
              effortless. Type in your query and tap "Search" to instantly
              access comprehensive word definitions, pronunciations, and more.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subHeader}>Meaning and Similar Words</Text>
            <Text style={styles.paragraph}>
              Dive deeper into word meanings. Beyond definitions, you'll find
              synonyms, antonyms, examples, and related words. This
              comprehensive view ensures you truly grasp a word's contextual
              usage.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subHeader}>Recent Searches</Text>
            <Text style={styles.paragraph}>
              Never lose a word you've explored. Your recent searches are stored
              for quick reference. Revisit words by selecting them from the
              history list—no need to type them again.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subHeader}>Bookmark Words</Text>
            <Text style={styles.paragraph}>
              Capture words you love. Utilize the bookmark feature by tapping
              the "Bookmark" icon on a word's detail screen. Your bookmarked
              words create a personalized collection for future exploration.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subHeader}>Create Notes</Text>
            <Text style={styles.paragraph}>
              Make the app uniquely yours. Use the note-taking feature to attach
              your thoughts, insights, or usage examples to any word. These
              private notes enhance your understanding and connection with
              words.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subHeader}>Settings and Personalization</Text>
            <Text style={styles.paragraph}>
              Tailor the app to your preferences. Adjust themes and customize
              VocalFel to suit your style and needs.
            </Text>
          </View>
          <Text style={styles.paragraph}>
            Thank you for choosing the VocalFel Dictionary App! We trust this
            empowers you to navigate the app effortlessly. Discover words,
            enrich your vocabulary, and immerse yourself in the world of
            language.
          </Text>
          <TouchableOpacity
            onPress={handleSupportPress}
            style={styles.contactButton}
          >
            <Text style={styles.contactButtonText}>Contact Support</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{ width: "100%" }}>
          <Divider />
        </View> */}
      </ScrollView>
    </View>
  );
};

export default Help;

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
  section: {
    // marginVertical: "5%",
  },
  contactButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  contactButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
