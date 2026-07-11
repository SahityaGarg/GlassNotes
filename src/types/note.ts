export type NoteTheme =
  | "default"
  | "paper"
  | "midnight"
  | "glass";

export type NoteFont =
  | "default"
  | "serif"
  | "mono";

export type Note = {
  id: string;

  title: string;

  content: string;

  theme: NoteTheme;

  font: NoteFont;

  createdAt: string;

  updatedAt: string;
};