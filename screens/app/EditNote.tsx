import {
  Animated,
  SafeAreaView,
  StyleSheet,
  View,
  Share,
  Platform,
  Alert,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AppHeader from "../../components/layouts/AppHeader";
import { TextInput as RNTextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamType } from "../../routes/AppStack";
import { IconButton, Text, Divider } from "react-native-paper";
import { useAppTheme, useObject, useQuery, useRealm } from "../../hooks";
import { Note } from "../../models/Note";
import moment from "moment";
import { hexToRGB } from "../../helpers";

type IProps = NativeStackScreenProps<AppStackParamType, "EditNote">;
const EditNote = ({ navigation, route }: IProps) => {
  const textInputRef = useRef<RNTextInput>(null);
  const [form, setForm] = useState({
    title: "",
    body: "",
  });
  const formRef = useRef(form);
  const setFieldValue = (field: keyof typeof form, value: string) => {
    formRef.current[field] = value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  const hasUnsavedChanges = Boolean(
    formRef.current.title || formRef.current.body
  );

  const theme = useAppTheme();
  const realm = useRealm();
  const note = useObject(Note, route.params.noteId);
  const isNewNote = route.params.newNote;

  useEffect(() => {
    if (note && !isNewNote) {
      setFieldValue("title", note.title || "");
      setFieldValue("body", note.body || "");
    }
  }, []);
  const handleSave = (showAlert = true) => {
    // const currentNote = realm.objectForPrimaryKey(Note, route.params.noteId);
    if (note) {
      realm.write(() => {
        note.title = formRef.current.title;
        note.body = formRef.current.body;
      });
      if (showAlert) {
        Platform.OS === "ios"
          ? Alert.alert("", "Saved")
          : ToastAndroid.show("Saved", 3000);
      }
    }
  };
  const handleShare = async () => {
    try {
      handleSave(false);
      const shareAction = await Share.share({
        message: note?.body || "",
        title: note?.title,
      });
      // console.log(shareAction);
    } catch (error) {}
  };
  // const notes = useQuery(Note);
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      try {
        if (isNewNote && !formRef.current.body && !formRef.current.title) {
          const currentNote = realm.objectForPrimaryKey(Note, note?.id || "");
          if (currentNote) {
            realm.write(() => {
              realm.delete(note);
            });
          }
        } else {
          const currentNote = realm.objectForPrimaryKey(Note, note?.id || "");
          if (currentNote) {
            realm.write(() => {
              if (
                currentNote.body !== formRef.current.body ||
                currentNote.title !== formRef.current.title
              ) {
                currentNote.createdAt = new Date();
              }
              currentNote.body = formRef.current.body;
              currentNote.title = formRef.current.title;
            });
          }
        }
      } catch (error) {
        // console.log(error);
      }
    });
  }, [navigation]);

  return (
    <View style={styles.wrapper}>
      <AppHeader
        title={isNewNote ? "New Note" : "Edit Note"}
        backAction={navigation.goBack}
      ></AppHeader>
      <View style={styles.actions}>
        <Text style={styles.actionDate}>
          {moment(note?.createdAt || new Date()).format("MMM DD, YYYY")}
        </Text>
        <View style={styles.actionButtons}>
          <IconButton
            icon={"content-save-outline"}
            size={25}
            disabled={!hasUnsavedChanges}
            onPress={() => handleSave(true)}
          />
          {/* <Animated.View style={{ transform: [{ rotateY: "130deg" }] }}>
            <IconButton icon={"download-outline"} size={25} />
          </Animated.View> */}
          <IconButton
            icon={"share-variant-outline"}
            size={25}
            onPress={handleShare}
          />
        </View>
      </View>
      <Divider />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.form}>
          <RNTextInput
            value={formRef.current.title}
            placeholder="Title"
            onChangeText={(text) => setFieldValue("title", text)}
            placeholderTextColor={theme.colors.text}
            selectionColor={theme.colors.primary}
            style={[styles.title, { color: theme.colors.text }]}
          />
          <RNTextInput
            value={formRef.current.body}
            placeholder="Write something down"
            onChangeText={(text) => setFieldValue("body", text)}
            placeholderTextColor={theme.colors.text}
            selectionColor={theme.colors.primary}
            style={[styles.body, { color: theme.colors.text }]}
            multiline
            textAlignVertical="top"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default EditNote;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "relative",
  },
  inner: {
    paddingHorizontal: "5%",
    flex: 1,
    // marginTop: "7%",
  },
  fab: {
    bottom: "10%",
    right: "10%",
    alignSelf: "flex-end",
    borderRadius: 360,
  },
  actions: {
    paddingHorizontal: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",
    alignItems: "center",
  },
  actionDate: {
    fontFamily: "Primary-400",
    fontSize: 18,
  },
  actionButtons: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  safeArea: {
    flex: 1,
    marginTop: "2%",
  },
  form: {
    flex: 1,
    marginTop: "5%",
    paddingHorizontal: "2%",
    paddingBottom: "5%",
  },
  title: {
    fontFamily: "Primary-700",
    fontSize: 30,
  },
  body: {
    marginTop: "10%",
    flex: 1,
    height: "90%",
    fontSize: 20,
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
  },
});
