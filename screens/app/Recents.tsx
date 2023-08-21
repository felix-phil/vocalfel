import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Animated as RnAnimated,
} from "react-native";
import React, { FC } from "react";
import AppHeader from "../../components/layouts/AppHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamType } from "../../routes/AppStack";
import { Text } from "react-native-paper";
import { useAppTheme, useQuery, useRealm } from "../../hooks";
import { Recent } from "../../models/Recents";

import ListItem from "../../components/common/ListItem";

type IProps = NativeStackScreenProps<AppStackParamType, "Recents">;

const Reacents = ({ navigation }: IProps) => {
  const theme = useAppTheme();
  const realm = useRealm();
  const recents = useQuery(Recent);

  const handleRemoveFromBookmarks = (item: Recent) => {
    realm.write(() => {
      realm.delete(item);
    });
  };
  const handlePress = (item: Recent) => {
    // @ts-ignore
    navigation.navigate("Search", {
      initialWord: item?.word,
    });
  };
  const handleRemoveAll = () => {
    realm.write(() => {
      realm.delete(recents);
    });
  };

  const renderRecent = ({ item, index }: { item: Recent; index: number }) => {
    return (
      <ListItem
        title={item?.word}
        index={index}
        onPress={() => handlePress(item)}
        onRemovePress={() => handleRemoveFromBookmarks(item)}
      />
    );
  };
  return (
    <View style={styles.wrapper}>
      <AppHeader
        title="Recents"
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
        contentContainerStyle={[
          styles.bookmarks,
          { flex: recents.length > 0 ? undefined : 1 },
        ]}
        data={recents?.sorted("createdAt", true)}
        keyExtractor={(item) => item.word}
        renderItem={renderRecent}
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

export default Reacents;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  clearText: {
    fontFamily: "Primary-500",
    fontSize: 16,
  },

  bookmarks: {
    paddingHorizontal: "3%",
    // flex: 1,
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
