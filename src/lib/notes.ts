import { Note } from "@/types/note";

const STORAGE_KEY = "glassnotes-notes";


export function getNotes(): Note[] {
  if (typeof window === "undefined") {
    return [];
  }

  const notes = localStorage.getItem(STORAGE_KEY);

  if (!notes) {
    return [];
  }

  return JSON.parse(notes);
}


export function saveNotes(notes: Note[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(notes)
  );
}


export function createNote(): Note {
  return {
    id: crypto.randomUUID(),
    title: "",
    content: "",
    theme: "default",
    font: "default",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export function updateNote(updatedNote: Note) {
  const notes = getNotes();


  const updatedNotes = notes.map((note) =>
    note.id === updatedNote.id
      ? {
          ...updatedNote,
          updatedAt: new Date().toISOString(),
        }
      : note
  );


  saveNotes(updatedNotes);
}


export function deleteNote(id: string) {
  const notes = getNotes();


  const filteredNotes = notes.filter(
    (note) => note.id !== id
  );


  saveNotes(filteredNotes);
}