import { Realm } from "@realm/react";
import { getValidDailyWord } from "../helpers/storages";

interface WordInfo {
  pos: string;
  gloss: string;
  words: string[];
}
// example?: string;
const partsOfSpeech = {
  a: "adjective",
  n: "noun",
  r: "adverb",
  s: "satellite",
  v: "verb",
};

export class Word extends Realm.Object<Word> {
  word!: string;
  info!: string;
  static schema = {
    name: "Word",
    properties: {
      word: "string",
      info: "string",
    },
    primaryKey: "word",
  };
  parseInfo() {
    try {
      const info = JSON.parse(this.info) as WordInfo;
      return {
        ...info,
        posFull: partsOfSpeech[info.pos as keyof typeof partsOfSpeech],
      };
    } catch (error) {
      return null;
    }
  }
}
