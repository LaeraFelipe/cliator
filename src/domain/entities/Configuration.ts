import CommandType from "./CommandType";

export enum LanguageTypes {
  TypeScript = "ts",
  JavaScript = "js",
}

export default interface Configuration {
  language: LanguageTypes;
  types: {
    [type: string]: CommandType;
  };
}
