"use client";

import { Plus } from "lucide-react";

import { Note } from "@/types/note";

type SidebarProps = {
  notes: Note[];
  selectedNoteId: string | null;
  onSelectNote: (id: string) => void;
  onCreateNote: () => void;
  onDeleteNote: (id: string) => void;
};

export function Sidebar({
  notes,
  selectedNoteId,
  onSelectNote,
  onCreateNote,
  onDeleteNote,
}: SidebarProps) {

  return (
    <aside className="hidden w-72 border-r border-gray-200 md:flex md:flex-col">

      <div className="border-b border-gray-200 p-5">

        <div className="flex items-center justify-between">

          <h1 className="text-xl font-semibold tracking-tight">
            GlassNotes
          </h1>

          <button
            onClick={onCreateNote}
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            <Plus size={18} />
          </button>

        </div>

      </div>


      <div className="flex-1 overflow-y-auto">

        {notes.map((note) => (

          <div key={note.id}>

            <button
              onClick={() => onSelectNote(note.id)}
              className={`
                w-full
                px-5
                py-4
                text-left
                transition
                hover:bg-gray-100

                ${
                  selectedNoteId === note.id
                    ? "bg-gray-100"
                    : ""
                }
              `}
            >

              <h3 className="truncate font-medium">
                {note.title || "Untitled Note"}
              </h3>

              <p className="mt-1 truncate text-sm text-gray-400">
                {note.content || "Empty note"}
              </p>

            </button>


            <button
              onClick={() => onDeleteNote(note.id)}
              className="
                px-5
                pb-3
                text-xs
                text-red-400
                hover:text-red-600
              "
            >
              Delete
            </button>


          </div>

        ))}

      </div>

    </aside>
  );
}