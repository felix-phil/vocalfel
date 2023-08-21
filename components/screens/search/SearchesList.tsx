import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { FC, useEffect, useState } from "react";
import availableWords from "../../../data/words.json";
import { ActivityIndicator, List } from "react-native-paper";
import { hexToRGB } from "../../../helpers";
import { useAppTheme, useRealm } from "../../../hooks";
import { Word } from "../../../models/Word";
import { Recent } from "../../../models/Recents";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";

interface IProps {
  searchText?: string;
  handleSelectWord: (word?: Word) => void;
}
const SearchesList: FC<IProps> = ({ searchText, handleSelectWord }) => {
  const realm = useRealm();
  const [filteredWords, setFilteredWords] = useState(availableWords);
  const [loading, setLoading] = useState(true);
  const theme = useAppTheme();

  useEffect(() => {
    setLoading(true);
    if (searchText) {
      const filters = availableWords.filter((word) => {
        if (word.toLowerCase().startsWith(searchText.toLowerCase())) {
          return true;
        }
        if (word.toLowerCase().includes(searchText.toLowerCase())) {
          return true;
        }
      });
      setFilteredWords(filters.sort());
    } else {
      setFilteredWords(availableWords);
    }
    setLoading(false);
  }, [searchText]);

  const addWordToRecents = (word: string) => {
    realm.write(() => {
      const recentWord = realm.objectForPrimaryKey(Recent, word);
      if (recentWord) {
        recentWord.createdAt = new Date();
      } else {
        realm.create(Recent, {
          word: word,
          createdAt: new Date(),
        });
      }
    });
  };
  const handleShowWord = (clickedWord: string) => {
    const wordGotten = realm.objectForPrimaryKey(Word, clickedWord);
    if (wordGotten) addWordToRecents(clickedWord);
    handleSelectWord(wordGotten);
  };
  // console.log(loading)
  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <List.Item
      style={[
        styles.title,
        { borderBottomColor: hexToRGB(theme.colors.text, 0.5) },
      ]}
      onPress={() => handleShowWord(item)}
      titleStyle={styles.titleText}
      title={item?.replaceAll("_", " ")}
    />
  );
  if (loading) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size={"large"} color={theme.colors.primary} />
      </View>
    );
  } else {
    return (
      <Animated.View
        entering={SlideInDown.duration(500)}
        exiting={SlideOutDown.duration(300)}
        style={{ flex: 1 }}
      >
        <FlatList
          data={filteredWords}
          keyExtractor={(item, idx) => item + idx}
          renderItem={renderItem}
        />
      </Animated.View>
    );
  }
};

export default SearchesList;

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  titleText: {
    fontFamily: "Primary-500",
    textTransform: "capitalize",
    fontSize: 18,
  },
  title: {
    borderBottomWidth: 0.25,
  },
});
