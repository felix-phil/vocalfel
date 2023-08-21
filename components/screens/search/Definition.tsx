import { Animated, ScrollView, Share, StyleSheet, View } from "react-native";
import React, { FC, useCallback, useEffect, useState } from "react";
import { Word } from "../../../models/Word";
import { useAppTheme, useObject, useRealm } from "../../../hooks";
import { Divider, FAB, IconButton, Text } from "react-native-paper";
import { Bookmark } from "../../../models/Bookmarks";
import ReAnimated, {
  BounceInDown,
  BounceInUp,
  BounceOutUp,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";
import * as Speech from "expo-speech";

interface IProps {
  word?: Word;
  handleSelectWord: (word?: Word) => void;
}
const Definition: FC<IProps> = ({ word, handleSelectWord }) => {
  const theme = useAppTheme();
  const realm = useRealm();
  if (!word) {
    word = realm.objectForPrimaryKey(Word, "a");
  }
  const bookmarked = useObject(Bookmark, word?.word || "");
  const [isBookmarded, setIsBookmarded] = useState(Boolean(bookmarked));
  const likeBtnValue = new Animated.Value(1);
  const selectWord = (clickedWord: string) => {
    const wordGotten = realm.objectForPrimaryKey(Word, clickedWord);
    handleSelectWord(wordGotten);
  };
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
      word?.word || ""
    );
    if (!bookmarkedCheck) {
      realm.write(() => {
        realm.create(Bookmark, {
          createdAt: new Date(),
          word: word?.word,
        });
      });
    } else {
      setIsBookmarded(true);
    }
  };

  const handleTextToSpeech = async () => {
    const isSpeaking = await Speech.isSpeakingAsync();
    if (isSpeaking) {
      return;
    }
    Speech.speak(
      `
      ${word?.word?.replaceAll("_", " ")}.
      ${word?.parseInfo()?.posFull}.
      ${word?.parseInfo()?.gloss}.
      Similar words: ${word
        ?.parseInfo()
        ?.words?.map((word) => word?.replaceAll("_", " "))
        .join(", ")}
    `,
      {
        language: "en",
        // onDone: () => console.log("Done speaking"),
        onError: (error) => {
          // console.log(error);
        },
      }
    );
  };
  const handleShare = async () => {
    try {
      const text = `
    ${word?.word?.replaceAll("_", " ")}.
    ${word?.parseInfo()?.posFull}.
    ${word?.parseInfo()?.gloss}.
    Similar words: ${word
      ?.parseInfo()
      ?.words?.map((word) => word?.replaceAll("_", " "))
      .join(", ")}
  `;
      await Share.share({ message: text, title: `VocalFel: ${word?.word}` });
    } catch (error) {}
  };
  
  const wordInfo = word?.parseInfo();
  return (
    <ReAnimated.View
      key={word?.word}
      entering={FadeIn.delay(300)}
      exiting={FadeOut.duration(200)}
      style={styles.viewWrapper}
    >
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.wordSection}>
          <IconButton
            onPress={handleTextToSpeech}
            icon={"volume-medium"}
            iconColor={theme.colors.secondary}
            size={40}
          />
          <Text
            adjustsFontSizeToFit
            selectable
            selectionColor={theme.colors.secondary}
            style={[styles.word, { color: theme.colors.primary }]}
          >
            {word?.word?.replaceAll("_", " ")}
          </Text>
          <IconButton
            onPress={handleAddToFavourites}
            size={35}
            // @ts-ignore
            style={[styles.favButton, { transform: [{ scale: likeBtnValue }] }]}
            iconColor={theme.colors.secondary}
            icon={isBookmarded ? "heart" : "heart-plus-outline"}
          />
        </View>
        <Divider style={styles.divider} />
        <View style={styles.info}>
          <Text style={styles.pos} selectable selectionColor={theme.colors.secondary}>{wordInfo?.posFull}</Text>
          <Text style={styles.gloss} selectable selectionColor={theme.colors.secondary}>{wordInfo?.gloss}</Text>
        </View>
        <View style={styles.similarWords}>
          {wordInfo?.words?.map((similarWord, index) => (
            <Text
              key={index}
              onPress={() => selectWord(similarWord)}
              selectionColor={theme.colors.primary}
              selectable
              style={[styles.similarWord, { color: theme.colors.secondary }]}
            >
              {similarWord?.replaceAll("_", " ")}
            </Text>
          ))}
        </View>
      </ScrollView>
      <ReAnimated.View entering={BounceInDown.duration(300)} style={styles.fab}>
        <FAB
          icon={"share-variant-outline"}
          onPress={handleShare}
          color={theme.colors.defaults.whiteOne}
          style={[styles.fabButton, { backgroundColor: theme.colors.primary }]}
          size="medium"
        />
      </ReAnimated.View>
    </ReAnimated.View>
  );
};

export default Definition;

const styles = StyleSheet.create({
  noWordWrapper: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {},
  viewWrapper: {
    flex: 1,
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
  favButton: {
    marginLeft: "auto",
  },
  divider: {
    marginVertical: "2%",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5%",
  },
  pos: {
    fontSize: 16,
    fontFamily: "Primary-700",
    fontWeight: "700",
  },
  gloss: {
    marginTop: "10%",
    fontSize: 20,
    fontFamily: "Primary-400",
    fontWeight: "200",
  },
  similarWords: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: "10%",
  },
  similarWord: {
    fontSize: 20,
    fontFamily: "Primary-400",
    fontWeight: "200",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
  fab: {
    bottom: "10%",
    right: "7%",
    alignSelf: "flex-end",
  },
  fabButton: {
    borderRadius: 360,
  },
});
