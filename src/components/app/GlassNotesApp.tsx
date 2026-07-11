"use client";

import { useEffect, useState } from "react";

import { Sidebar } from "@/components/sidebar/Sidebar";
import { NoteEditor } from "@/components/editor/NoteEditor";
import { Workspace } from "@/components/home/Workspace";

import { View } from "@/types/view";
import { Note } from "@/types/note";
import { AppShell } from "@/components/layout/AppShell";

import {
  createNote,
  getNotes,
  saveNotes,
} from "@/lib/notes";

export function GlassNotesApp() {
  const [view, setView] = useState<View>("home");

  const [notes, setNotes] = useState<Note[]>([]);

  const [selectedNoteId, setSelectedNoteId] =
    useState<string | null>(null);

  useEffect(() => {
    const savedNotes = getNotes();

    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const selectedNote =
    notes.find((note) => note.id === selectedNoteId) ?? null;

  function handleCreateNote() {
    const note = createNote();

    setNotes((previous) => [
      note,
      ...previous,
    ]);

    setSelectedNoteId(note.id);

    setView("editor");
  }

  function handleSelectNote(id: string) {
    setSelectedNoteId(id);

    setView("editor");
  }

  function handleBack() {
    setView("home");
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

  function handleUpdateContent(content: string) {
    if (!selectedNoteId) return;

    setNotes((previous) =>
      previous.map((note) =>
        note.id === selectedNoteId
          ? {
              ...note,
              content,
              updatedAt: new Date().toISOString(),
            }
          : note
      )
    );
  }

  return (
  <AppShell
    sidebar={
      <Sidebar
        notes={notes}
        selectedNoteId={selectedNoteId}
        onSelectNote={handleSelectNote}
        onCreateNote={handleCreateNote}
      />
    }
  >
    {view === "home" ? (
      <Workspace
      notes={notes}
       onCreateNote={handleCreateNote}
      onOpenNote={handleSelectNote}
    />
    ) : (
      <NoteEditor
        note={selectedNote}
        onUpdateTitle={handleUpdateTitle}
        onUpdateContent={handleUpdateContent}
        onBack={handleBack}
      />
    )}
  </AppShell>
);
}