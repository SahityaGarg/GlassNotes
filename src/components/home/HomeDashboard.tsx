"use client";

import { Note } from "@/types/note";

type Props = {
  notes: Note[];
  onCreateNote: () => void;
  onOpenNote: (id: string) => void;
};

export function HomeDashboard({
  notes,
  onCreateNote,
  onOpenNote,
}: Props) {
  return (
    <div className="flex h-full items-center justify-center">

      <div className="text-center">

        <h1 className="text-6xl font-semibold tracking-tight">
          GlassNotes
        </h1>

        <p className="mt-4 text-lg text-neutral-500">
          Your thoughts deserve a beautiful home.
        </p>

        <button
          onClick={onCreateNote}
          className="mt-10 rounded-xl bg-black px-8 py-4 text-white transition hover:scale-[1.02]"
        >
          Create Note
        </button>

        {notes.length > 0 && (
          <button
            onClick={() => onOpenNote(notes[0].id)}
            className="ml-4 rounded-xl border px-8 py-4"
          >
            Continue Writing
          </button>
        )}

      </div>

    </div>
  );
}