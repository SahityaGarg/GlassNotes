"use client";

import { Plus } from "lucide-react";

import { Note } from "@/types/note";

type WorkspaceProps = {
  notes: Note[];
  onCreateNote: () => void;
  onOpenNote: (id: string) => void;
};

export function Workspace({
  notes,
  onCreateNote,
  onOpenNote,
}: WorkspaceProps) {
  const recent = notes[0];

  return (
    <div className="h-full overflow-y-auto bg-neutral-50">

      <div className="mx-auto flex max-w-7xl flex-col px-16 py-16">

        {/* Hero */}

        <div>

          <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
            Workspace
          </p>

          <h1 className="mt-4 text-6xl font-semibold tracking-tight text-neutral-900">
            Good Afternoon.
          </h1>

          <p className="mt-5 max-w-xl text-xl leading-9 text-neutral-500">
            Capture ideas, write deeply, and keep every thought beautifully organized.
          </p>

        </div>

        {/* Continue */}

        <div
          className=" mt-16 overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >

          <button
            onClick={() =>
              recent
                ? onOpenNote(recent.id)
                : onCreateNote()
            }
            className="flex w-full items-center justify-between p-10 text-left"
          >

            <div>

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">
                Continue Writing
              </p>

              <h2 className="mt-4 text-3xl font-semibold">

                {recent?.title || "Create your first note"}

              </h2>

              <p className="mt-3 text-neutral-500">

                {recent
                  ? "Continue your latest writing session."
                  : "Start building your second brain."}

              </p>

            </div>

            <div
              className=" flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white "
            >
              <Plus size={26} />
            </div>

          </button>

        </div>

      </div>

    </div>
  );
}