import { createRealmContext } from "@realm/react";
import { Word } from "./Word";
import { Bookmark } from "./Bookmarks";
import { Recent } from "./Recents";
import { Note } from "./Note";

export const RealmContext = createRealmContext({
  schema: [Word, Bookmark, Recent, Note],
  schemaVersion: 6,
  path: "bundle.realm",
});
