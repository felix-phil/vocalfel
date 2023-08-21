import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import AppHeader from "../../components/layouts/AppHeader";
import { List } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamType } from "../../routes/AppStack";
import { IconButton, Text } from "react-native-paper";
import { useAppTheme, useQuery, useRealm } from "../../hooks";
import { Bookmark } from "../../models/Bookmarks";
import { hexToRGB } from "../../helpers";
import ListItem from "../../components/common/ListItem";

type IProps = NativeStackScreenProps<AppStackParamType, "Bookmarks">;
const Bookmarks = ({ navigation }: IProps) => {
  const theme = useAppTheme();
  const realm = useRealm();
  const bookmarks = useQuery(Bookmark);

  const handleRemoveFromBookmarks = (item: Bookmark) => {
    realm.write(() => {
      realm.delete(item);
    });
  };
  const handleRemoveAll = () => {
    realm.write(() => {
      realm.delete(bookmarks);
    });
  };
  const renderBookmark = ({
    item,
    index,
  }: {
    item: Bookmark;
    index: number;
  }) => {
    return (
      <ListItem
        index={index}
        title={item.word?.replaceAll("_", " ")}
        onPress={() =>
          // @ts-ignore
          navigation.navigate("Search", {
            initialWord: item?.word,
          })
        }
        onRemovePress={() => handleRemoveFromBookmarks(item)}
      />
    );
  };
  return (
    <View style={styles.wrapper}>
      <AppHeader
        title="Bookmarks"
        backAction={navigation.goBack}
        right={
          <Text
            adjustsFontSizeToFit
            onPress={handleRemoveAll}
            style={[styles.clearText, { color: theme.colors.secondary }]}
          >
            Clear all
          </Text>
        }
      ></AppHeader>
      <FlatList
        contentContainerStyle={styles.bookmarks}
        data={bookmarks}
        keyExtractor={(item) => item.word}
        renderItem={renderBookmark}
        ListEmptyComponent={
          <View style={styles.emptyWrapper}>
            <MaterialCommunityIcons
              name="eye-off-outline"
              color={theme.colors.primary}
              size={100}
            />
            <Text style={styles.emptyText}>Nothing to see here</Text>
          </View>
        }
      />
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  clearText: {
    fontFamily: "Primary-500",
    fontSize: 16,
  },
  listTitle: {
    fontFamily: "Primary-500",
    fontSize: 18,
  },
  bookmarks: {
    paddingHorizontal: "3%",
    flex: 1,
  },
  listItem: {
    borderBottomWidth: 0.3,
  },
  emptyWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    marginTop: "5%",
    fontSize: 20,
    fontFamily: "Primary-700",
  },
});
