import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  View,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { TextInput } from "react-native-paper";
import { useAppTheme, useRealm } from "../../hooks";
import { Ionicons } from "@expo/vector-icons";
import SearchesList from "../../components/screens/search/SearchesList";
import Definition from "../../components/screens/search/Definition";
import { Word } from "../../models/Word";
import Fade from "../../components/animations/Fade";
import { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
import { TabParamsType } from "../../routes/BottomTab";
import { Recent } from "../../models/Recents";
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type IProps = MaterialBottomTabScreenProps<TabParamsType, "Search">;

const Search = ({ navigation, route }: IProps) => {
  const theme = useAppTheme();
  const realm = useRealm();
  const initialWord = route?.params?.initialWord;
  const [searchQuery, setsearchQuery] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedWord, setSelectedWord] = useState<Word>();
  const [isSearching, setIsSearching] = useState(false);
  const textInputRef = useRef<RNTextInput>(null);

  const handleSelectWord = (word?: Word) => {
    if (!word) {
      Alert.alert(
        "Error",
        "An error occurred. Selected word deefinition not found."
      );
      return;
    }
    setSelectedWord(word);
    // addWordToRecents(word?.word);
    setIsSearching(false);
    textInputRef.current?.blur();
  };
  useEffect(() => {
    if (initialWord) {
      handleSelectWord(realm.objectForPrimaryKey(Word, initialWord));
    }
  }, [initialWord]);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.inner}>
        <TextInput
          ref={textInputRef}
          selectTextOnFocus
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          onFocus={() => setIsSearching(true)}
          onPressIn={() => setIsSearching(true)}
          // onBlur={() => setIsSearching(false)}
          mode="outlined"
          outlineColor={theme.colors.primary}
          outlineStyle={{ borderWidth: 2, borderRadius: 10 }}
          placeholder="Search"
          returnKeyType="search"
          onEndEditing={() => setsearchQuery(searchText)}
          left={
            isSearching ? (
              <TextInput.Icon
                onPress={() => {
                  setIsSearching(false);
                  textInputRef.current?.blur();
                }}
                size={30}
                icon={(props) => <Ionicons {...props} name="arrow-back" />}
              />
            ) : (
              <TextInput.Icon
                // disabled
                size={30}
                icon={(props) => <Ionicons {...props} name="search" />}
              />
            )
          }
          right={
            isSearching && (
              <TextInput.Icon
                size={30}
                onPress={() => {
                  setSearchText("");
                  setsearchQuery("");
                }}
                icon={(props) => <Ionicons {...props} name="close" />}
              />
            )
          }
        />
      </View>
      <View
        // duration={200}
        // delay={0}
        // keyChange={selectedWord}
        style={styles.main}
      >
        {isSearching ? (
          <SearchesList
            searchText={searchQuery}
            handleSelectWord={handleSelectWord}
          />
        ) : (
          <Definition word={selectedWord} handleSelectWord={handleSelectWord} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  inner: {
    paddingHorizontal: "5%",
    marginTop: "7%",
  },
  main: {
    flex: 1,
    marginHorizontal: "5%",
    marginTop: "7%",
  },
});
