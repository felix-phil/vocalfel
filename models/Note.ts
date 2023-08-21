import { Realm } from "@realm/react";

export class Note extends Realm.Object<Note> {
  id!: string;
  title!: string;
  body!: string;
  color!: string;
  createdAt!: Date;

  static schema = {
    name: "Note",
    properties: {
      id: "string",
      title: "string?",
      body: "string?",
      color: "string?",
      createdAt: "date",
    },
    primaryKey: "id",
  };
}
