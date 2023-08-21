import { Realm } from "@realm/react";

export class Bookmark extends Realm.Object<Bookmark> {
  word!: string;
  createdAt!: Date;
  static schema = {
    name: "Bookmark",
    properties: {
      word: "string",
      createdAt: "date",
    },
    primaryKey: "word",
  };
}
