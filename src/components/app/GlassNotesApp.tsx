"use client";

import { useEffect, useState } from "react";

import { Sidebar } from "@/components/sidebar/Sidebar";
import { NoteEditor } from "@/components/editor/NoteEditor";

import { Note } from "@/types/note";
import { getNotes, createNote } from "@/lib/notes";

export function GlassNotesApp() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

  useEffect(() => {
    const savedNotes = getNotes();

    setNotes(savedNotes);

    if (savedNotes.length > 0) {
      setSelectedNoteId(savedNotes[0].id);
    }
  }, []);

  function handleCreateNote() {
    const note = createNote();

    setNotes((previous) => [note, ...previous]);

    setSelectedNoteId(note.id);
  }

  function handleUpdateTitle(title: string) {
    if (!selectedNoteId) return;

    setNotes((previous) =>
      previous.map((note) =>
        note.id === selectedNoteId
          ? {
              ...note,
              title,
              updatedAt: new Date().toISOString(),
            }
          : note
      )
    );
  }

  const selectedNote =
    notes.find((note) => note.id === selectedNoteId) ?? null;

  return (
    <main className="flex h-screen bg-white">
      <Sidebar
        notes={notes}
        selectedNoteId={selectedNoteId}
        onSelectNote={setSelectedNoteId}
        onCreateNote={handleCreateNote}
      />

      <section className="flex flex-1">
        <NoteEditor
          note={selectedNote}
          onUpdateTitle={handleUpdateTitle}
        />
      </section>
    </main>
  );
}