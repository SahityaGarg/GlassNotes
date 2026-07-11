"use client";

import { useEffect, useState } from "react";

import { Sidebar } from "@/components/sidebar/Sidebar";
import { HomeDashboard } from "@/components/home/HomeDashboard";
import { NoteEditor } from "@/components/editor/NoteEditor";
import { AppShell } from "@/components/layout/AppShell";

import { View } from "@/types/view";
import { Note } from "@/types/note";

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
    notes.find(
      (note) => note.id === selectedNoteId
    ) ?? null;




  function handleCreateNote() {

    const note = createNote();


    setNotes((previous) => [
      note,
      ...previous,
    ]);


    setSelectedNoteId(note.id);

    setView("editor");

  }




  function handleSelectNote(id:string) {

    setSelectedNoteId(id);

    setView("editor");

  }




  function handleBack() {

    setView("home");

  }





  function handleUpdateTitle(title:string) {

    if(!selectedNoteId) return;


    setNotes((previous)=>

      previous.map((note)=>

        note.id === selectedNoteId

        ? {
            ...note,
            title,
            updatedAt:new Date().toISOString(),
          }

        : note

      )

    );

  }





  function handleUpdateContent(content:string) {

    if(!selectedNoteId) return;


    setNotes((previous)=>

      previous.map((note)=>

        note.id === selectedNoteId

        ? {
            ...note,
            content,
            updatedAt:new Date().toISOString(),
          }

        : note

      )

    );

  }


function handleUpdateTheme(theme: Note["theme"]) {
  if (!selectedNoteId) return;

  setNotes((previous) =>
    previous.map((note) =>
      note.id === selectedNoteId
        ? {
            ...note,
            theme,
            updatedAt: new Date().toISOString(),
          }
        : note
    )
  );
}


  function handleDeleteNote(id:string) {


    const firstConfirmation =
      window.confirm(
        "Are you sure you want to delete this note?"
      );


    if(!firstConfirmation) return;



    const secondConfirmation =
      window.confirm(
        "This action cannot be undone. Delete permanently?"
      );


    if(!secondConfirmation) return;




    setNotes((previous)=>

      previous.filter(
        (note)=>note.id !== id
      )

    );



    if(selectedNoteId === id) {

      setSelectedNoteId(null);

      setView("home");

    }

  }





  return (

    <AppShell

      sidebar={

        <Sidebar

          notes={notes}

          selectedNoteId={selectedNoteId}

          onSelectNote={handleSelectNote}

          onCreateNote={handleCreateNote}

          onDeleteNote={handleDeleteNote}

        />

      }

    >


      {view === "home" ? (

        <HomeDashboard

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