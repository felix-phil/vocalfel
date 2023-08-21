import { Realm } from "@realm/react";

export class Recent extends Realm.Object<Recent> {
  word!: string;
  createdAt!: Date;
  static schema = {
    name: "Recent",
    properties: {
      word: "string",
      createdAt: "date",
    },
    primaryKey: "word",
  };
}
