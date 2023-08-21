import {
  Alert,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import AppHeader from "../../components/layouts/AppHeader";
import { TextInput as RNTextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamType } from "../../routes/AppStack";
import {
  IconButton,
  Text,
  TextInput,
  FAB,
  Checkbox,
  TouchableRipple,
} from "react-native-paper";
import { useAppTheme, useQuery, useRealm } from "../../hooks";
import { Note } from "../../models/Note";
import { getRandomColorfromThemeColors, hexToRGB } from "../../helpers";
import { Ionicons } from "@expo/vector-icons";
import { Realm } from "@realm/react";
import moment from "moment";
import { useThemePreferenceContext } from "../../context/ThemePreferenceContext";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";

type IProps = NativeStackScreenProps<AppStackParamType, "Notes">;
const Notes = ({ navigation }: IProps) => {
  const [searchText, setSearchText] = useState("");
  const textInputRef = useRef<RNTextInput>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const fullSelectionMode = selectedIds.length > 0 ? true : false;
  const theme = useAppTheme();
  const { isThemeDark } = useThemePreferenceContext();
  const realm = useRealm();
  const notes = useQuery(Note).filtered(
    `title CONTAINS[c] $0 OR body CONTAINS[c] $0`,
    searchText
  );

  const handleNewNote = () => {
    realm.write(() => {
      const newNote = realm.create(Note, {
        id: new Realm.BSON.ObjectId().toHexString(),
        color: getRandomColorfromThemeColors(),
        createdAt: new Date(),
        title: "",
        body: "",
      });
      navigation.navigate("EditNote", {
        newNote: true,
        noteId: newNote.id,
      });
    });
  };
  const handlePressNote = (noteId: string) => {
    if (fullSelectionMode) {
      const alreadyExists = selectedIds.includes(noteId);
      if (alreadyExists) {
        setSelectedIds((prev) => prev.filter((id) => id !== noteId));
      } else {
        setSelectedIds((prev) => [...prev, noteId]);
      }
    } else {
      navigation.navigate("EditNote", {
        newNote: false,
        noteId: noteId,
      });
    }
  };
  const handleLongPressNote = (noteId: string) => {
    if (fullSelectionMode) {
      return;
    } else {
      setSelectedIds((prev) => [...prev, noteId]);
    }
  };
  const deleteSelected = () => {
    try {
      selectedIds.forEach((id) => {
        const noteToDelete = realm.objectForPrimaryKey(Note, id);
        if (noteToDelete) {
          realm.write(() => {
            realm.delete(noteToDelete);
          });
        }
      });
      setSelectedIds([]);
    } catch (error) {}
  };
  const handleDeleteSelected = () => {
    Alert.alert("", `Delete ${selectedIds.length} Notes?`, [
      { style: "cancel", text: "Cancel" },
      { onPress: deleteSelected, style: "destructive", text: "Delete" },
    ]);
  };
  const renderNote = ({ item, index }: { item: Note; index: number }) => {
    const randomFallbackColor = getRandomColorfromThemeColors();
    return (
      <Animated.View
        key={index}
        entering={SlideInLeft.duration(400).delay(50 * index)}
        exiting={SlideOutRight.duration(400).delay(50*index).springify()}
      >
        <TouchableRipple
          onPress={() => handlePressNote(item.id)}
          onLongPress={() => handleLongPressNote(item.id)}
          disabled={false}
          rippleColor={hexToRGB(item.color || randomFallbackColor, 0.4)}
          // activeOpacity={0.5}
          style={styles.singleNoteTouchable}
        >
          <View
            style={[
              styles.singleNoteWrapper,
              {
                backgroundColor: !isThemeDark
                  ? hexToRGB(item.color || randomFallbackColor, 0.2)
                  : theme.colors.defaults.whiteOne,
              },
            ]}
          >
            <View style={styles.singleNoteRight}>
              <Text
                style={[
                  styles.singleNoteTitle,
                  { color: theme.colors.defaults.blackOne },
                ]}
                numberOfLines={1}
              >
                {item.title || "No Title"}
              </Text>
              <Text
                style={[
                  styles.singleNoteBody,
                  { color: hexToRGB(theme.colors.defaults.blackOne, 0.4) },
                ]}
                numberOfLines={1}
              >
                {item.body || "No Text"}
              </Text>
              <Text
                style={[
                  styles.singleNoteDate,
                  { color: hexToRGB(theme.colors.defaults.blackOne, 0.6) },
                ]}
              >
                {moment(item.createdAt).format("MMM DD, YYYY")}
              </Text>
            </View>
            <View style={styles.singleNoteCheckbox}>
              <Checkbox.IOS
                status={
                  selectedIds.includes(item.id) && fullSelectionMode
                    ? "checked"
                    : "unchecked"
                }
                color={theme.colors.secondary}
              />
            </View>
          </View>
        </TouchableRipple>
      </Animated.View>
    );
  };
  return (
    <View style={styles.wrapper}>
      <AppHeader
        title="Notes"
        backAction={
          fullSelectionMode ? () => setSelectedIds([]) : navigation.goBack
        }
        right={
          fullSelectionMode && (
            <IconButton
              onPress={handleDeleteSelected}
              icon={"trash-can-outline"}
              iconColor={theme.colors.secondary}
            />
          )
        }
      ></AppHeader>
      <View style={styles.inner}>
        <TextInput
          ref={textInputRef}
          selectTextOnFocus
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          // onBlur={() => setIsSearching(false)}
          mode="outlined"
          outlineColor={theme.colors.primary}
          outlineStyle={{ borderWidth: 2, borderRadius: 10 }}
          placeholder="Search"
          returnKeyType="search"
          left={
            <TextInput.Icon
              // disabled
              size={30}
              icon={(props) => <Ionicons {...props} name="search" />}
            />
          }
          right={
            <TextInput.Icon
              size={30}
              onPress={() => {
                setSearchText("");
                textInputRef.current?.blur();
              }}
              icon={(props) => <Ionicons {...props} name="close" />}
            />
          }
        />
        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.flatListContainer}
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={renderNote}
        />
      </View>
      <FAB
        icon={"plus"}
        onPress={handleNewNote}
        color={theme.colors.defaults.whiteOne}
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        size="medium"
      />
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },
  inner: {
    paddingHorizontal: "5%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    // marginTop: "7%",
  },
  fab: {
    bottom: "10%",
    right: "10%",
    alignSelf: "flex-end",
    borderRadius: 360,
  },
  flatList: {
    marginTop: "5%",
  },
  flatListContainer: {
    // flex: 1,
  },
  singleNoteTouchable: {
    marginVertical: "2%",
    borderRadius: 15,
    overflow: "hidden",
  },
  singleNoteWrapper: {
    height: 100,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    // marginRight: "auto",
    paddingHorizontal: "5%",
    paddingVertical: "3%",
    borderRadius: 15,
    alignItems: "center",
  },
  singleNoteRight: {
    flex: 1,
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  singleNoteTitle: {
    fontSize: 20,
    fontFamily: "Primary-600",
  },
  singleNoteBody: {
    fontSize: 14,
    fontFamily: "Primary-400",
  },
  singleNoteDate: {
    fontSize: 16,
    fontFamily: "Primary-600",
  },
  singleNoteCheckbox: {
    marginRight: "5%",
  },
});
