"use client";

import { useEffect } from "react";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import { AnimatedEditor } from "./AnimatedEditor";

import { Note } from "@/types/note";

type NoteEditorProps = {
  note: Note | null;
  onUpdateTitle: (title: string) => void;
  onUpdateContent: (content: string) => void;
  onBack: () => void;
};

export function NoteEditor({
  note,
  onUpdateTitle,
  onUpdateContent,
  onBack, 
}: NoteEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,

    extensions: [
      StarterKit,

      Placeholder.configure({
        placeholder: "Start writing...",
      }),
    ],

    content: note?.content ?? "",

    onUpdate({ editor }) {
      onUpdateContent(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor || !note) return;

    if (editor.getHTML() !== note.content) {
      editor.commands.setContent(note.content);
    }
  }, [editor, note]);

  if (!editor) return null;

  return (
    <AnimatedEditor>
      <div
        className="
          mx-auto
          flex
          h-full
          w-full
          max-w-3xl
          flex-col
          px-6
          pt-12
        "
        
        >
         <button
           onClick={onBack}
          className="
          mb-8
          w-fit
          rounded-lg
          px-3
          py-2
          text-sm
          text-neutral-400
          transition
          hover:bg-neutral-100
          hover:text-black
         "
        >
       ← Dashboard
       </button>
        <input
          value={note?.title ?? ""}
          onChange={(e) => onUpdateTitle(e.target.value)}
          placeholder="Untitled Note"
          className="
            mb-10
            w-full
            bg-transparent
            text-5xl
            font-semibold
            tracking-tight
            outline-none
            placeholder:text-neutral-300
          "
        />

        <div
          className="flex-1 cursor-text"
          onClick={() => editor.commands.focus()}
        >
          <EditorContent
            editor={editor}
            className="
              prose
              prose-lg
              max-w-none
              min-h-full
              text-[21px]
              leading-[1.8]
              [&_.ProseMirror]:outline-none
            "
          />
        </div>
      </div>
    </AnimatedEditor>
  );
}