import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
// import { ScrollView } from "react-native-gesture-handler";
import { useAppTheme, useObject, useQuery, useRealm } from "../../hooks";
import { IconButton, Text, Button as TextButton } from "react-native-paper";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { hexToRGB } from "../../helpers";
import { Word } from "../../models/Word";
import { getValidDailyWord, storeDailyWord } from "../../helpers/storages";
import { TabParamsType } from "../../routes/BottomTab";
import { Bookmark } from "../../models/Bookmarks";
import * as Speech from "expo-speech";
import ReAnimated, { SlideInDown, SlideInUp } from "react-native-reanimated";
import { useIsFocused } from "@react-navigation/native";

const SCREEN_HEIGHT = Dimensions.get("screen").height;
type IProps = MaterialBottomTabScreenProps<TabParamsType, "HomePage">;

const HomePage = ({ navigation }: IProps) => {
  const theme = useAppTheme();
  const realm = useRealm();
  const [dailyWord, setDailyWord] = useState<Word>();
  const likeBtnValue = new Animated.Value(1);
  const isFocused = useIsFocused();

  const bookmarked = useObject(Bookmark, dailyWord?.word || "");
  const [isBookmarked, setisBookmarked] = useState(bookmarked ? true : false);
  const handleAddToFavourites = () => {
    Animated.timing(likeBtnValue, {
      useNativeDriver: true,
      duration: 100,
      delay: 0,
      toValue: 1.5,
    }).start(() =>
      Animated.timing(likeBtnValue, {
        toValue: 1,
        useNativeDriver: true,
        duration: 100,
        delay: 0,
      }).start()
    );
    const bookmarkedCheck = realm.objectForPrimaryKey(
      Bookmark,
      dailyWord?.word || ""
    );
    if (!bookmarkedCheck) {
      realm.write(() => {
        realm.create(Bookmark, {
          createdAt: new Date(),
          word: dailyWord?.word,
        });
        setisBookmarked(true);
      });
    }else{
      setisBookmarked(true)
    }
  };
  const fetchDailyWord = useCallback(async () => {
    const savedWord = await getValidDailyWord();
    if (savedWord) {
      setDailyWord(realm.objectForPrimaryKey(Word, savedWord));
    } else {
      const allWords = realm.objects(Word);
      const randomIndex = Math.floor(Math.random() * allWords.length);
      const randomWord = allWords[randomIndex];
      await storeDailyWord(randomWord?.word);
      setDailyWord(randomWord);
    }
  }, []);
  const handleTextToSpeech = async () => {
    const isSpeaking = await Speech.isSpeakingAsync();
    if (isSpeaking) {
      return;
    }
    Speech.speak(
      `
      ${dailyWord?.word?.replaceAll("_", " ")}.
      ${dailyWord?.parseInfo()?.posFull}.
      ${dailyWord?.parseInfo()?.gloss}.
      Similar words: ${dailyWord
        ?.parseInfo()
        ?.words?.map((word) => word.replaceAll("_", " "))
        .join(", ")}
    ` || "",
      {
        language: "en",
        // onDone: () => console.log("Done speaking"),
        onError: (error) => {
          // console.log(error);
        },
      }
    );
  };
  // @ts-ignore
  const isHermes = () => !!global.HermesInternal;
  useEffect(() => {
    fetchDailyWord();
  }, [fetchDailyWord]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <ReAnimated.View
          key={String(isFocused) + "top"}
          entering={SlideInUp.duration(700)}
          style={styles.top}
        >
          <View
            style={[
              styles.titleWrapper,
              { backgroundColor: hexToRGB(theme.colors.defaults.grey, 0.6) },
            ]}
          >
            <Text style={styles.titleDate}>
              {moment(new Date().toISOString()).format("Do MMMM, YYYY.")}
            </Text>
            <MaterialCommunityIcons
              size={30}
              name="calendar-month"
              color={theme.colors.text}
            />
          </View>
          <Text style={styles.dayWord}>Word of the day</Text>
          <View style={[styles.imgWrapper]}>
            <Image
              resizeMode="cover"
              style={styles.img}
              source={require("../../assets/images/brain.png")}
            />
          </View>
        </ReAnimated.View>
        <ReAnimated.View
          entering={SlideInDown.duration(700)}
          key={String(isFocused) + "bottom"}
          style={[styles.bottom, { backgroundColor: theme.colors.primary }]}
        >
          <View style={styles.wordSection}>
            <IconButton
              onPress={handleTextToSpeech}
              icon={"volume-medium"}
              iconColor={theme.colors.secondary}
              size={40}
            />
            <Text
              adjustsFontSizeToFit
              style={[styles.word, { color: theme.colors.defaults.whiteOne }]}
            >
              {dailyWord?.word?.replaceAll("_", " ")}
            </Text>
            <IconButton
              onPress={handleAddToFavourites}
              size={35}
              // @ts-ignore
              style={[
                styles.favButton,
                { transform: [{ scale: likeBtnValue }] },
              ]}
              iconColor={theme.colors.secondary}
              icon={isBookmarked ? "heart" : "heart-plus-outline"}
            />
          </View>

          <ReAnimated.View style={styles.mainWords}>
            <Text
              style={[styles.gloss, { color: theme.colors.defaults.whiteOne }]}
            >
              {dailyWord?.parseInfo()?.posFull}
            </Text>
            <Text
              // numberOfLines={3}
              style={[styles.gloss, { color: theme.colors.defaults.whiteOne }]}
            >
              {dailyWord?.parseInfo()?.gloss}
            </Text>
          </ReAnimated.View>
          <TextButton
            onPress={() =>
              navigation?.navigate("Search", {
                initialWord: dailyWord?.word,
              })
            }
            mode="text"
            labelStyle={{ fontSize: 20, marginTop: "5%" }}
            textColor={theme.colors.secondary}
          >
            Read more
          </TextButton>
        </ReAnimated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "5%",
  },
  titleWrapper: {
    paddingHorizontal: "7%",
    paddingVertical: "1.5%",
    alignSelf: "flex-start",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  titleDate: {
    fontFamily: "Primary-400",
    fontSize: 19,
  },
  scroll: {
    // height: SCREEN_HEIGHT,
    paddingHorizontal: "2%",
  },
  top: {
    height: (SCREEN_HEIGHT / 10) * 4.5,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: "2%",
  },
  bottom: {
    height: (SCREEN_HEIGHT / 10) * 5.5,
    borderRadius: 35,
    paddingHorizontal: "5%",
    paddingTop: "12%",
  },
  dayWord: {
    marginTop: "5%",
    paddingLeft: "2%",
    fontSize: 28,
    fontFamily: "Secondary-700",
    fontWeight: "bold",
  },
  imgWrapper: {
    flex: 1,
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  wordSection: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  word: {
    fontSize: 25,
    fontFamily: "Primary-700",
    letterSpacing: 1,
    textTransform: "capitalize",
    flex: 1,
  },
  pos: {
    fontSize: 16,
    fontFamily: "Primary-900",
    fontWeight: "700",
  },
  gloss: {
    marginTop: "2%",
    fontSize: 20,
    fontFamily: "Primary-400",
    fontWeight: "200",
  },
  soundWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  sound: {
    fontSize: 25,
    fontFamily: "Primary-500",
  },
  mainWords: {},
  favButton: {
    marginLeft: "auto",
  },
});
