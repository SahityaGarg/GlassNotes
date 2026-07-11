"use client";

import { useEffect, useState } from "react";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import { AnimatedEditor } from "./AnimatedEditor";
import { EditorToolbar } from "./EditorToolbar";
import { AppearancePanel } from "./AppearancePanel";

import { Note } from "@/types/note";

type NoteEditorProps = {
  note: Note | null;
  onUpdateTitle: (title: string) => void;
  onUpdateContent: (content: string) => void;
  onUpdateTheme: (theme: Note["theme"]) => void;
  onBack: () => void;
};

export function NoteEditor({
  note,
  onUpdateTitle,
  onUpdateContent,
  onBack,
  onUpdateTheme,
}: NoteEditorProps) {
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [readingTime, setReadingTime] = useState(0);

  const [panelOpen, setPanelOpen] = useState(false);

  function updateStatistics(text: string) {
    const trimmed = text.trim();

    const wordCount =
      trimmed === ""
        ? 0
        : trimmed.split(/\s+/).length;

    setWords(wordCount);
    setCharacters(text.length);

    setReadingTime(
      wordCount === 0
        ? 0
        : Math.max(1, Math.ceil(wordCount / 200))
    );
  }

  const editor = useEditor({
    immediatelyRender: false,

    extensions: [
      StarterKit,

      Placeholder.configure({
        placeholder: "Start writing...",
      }),
    ],

    content: note?.content ?? "",

    onCreate({ editor }) {
      updateStatistics(editor.getText());
    },

    onUpdate({ editor }) {
      updateStatistics(editor.getText());
      onUpdateContent(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor || !note) return;

    if (editor.getHTML() !== note.content) {
      editor.commands.setContent(note.content);
      updateStatistics(editor.getText());
    }
  }, [editor, note]);

  if (!editor || !note) return null;

  return (
    <AnimatedEditor>
      <div
       className={`
         relative
         flex
          h-full
         flex-col
          transition-all
         duration-500

         ${
           note.theme === "default"
           ? "bg-neutral-50"

           : note.theme === "paper"
           ? "bg-amber-50"

           : note.theme === "midnight"
           ? "bg-neutral-950 text-white"

           : "bg-gradient-to-br from-cyan-100 via-white to-blue-100"
        }
      `}
      >
        <AppearancePanel
          open={panelOpen}
          onToggle={() => setPanelOpen(!panelOpen)}
          theme={note.theme}
          onThemeChange={onUpdateTheme}
        />

        <div className="border-b border-neutral-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-8 py-5">
            <button
              onClick={onBack}
              className="
                rounded-xl
                px-4
                py-2
                text-sm
                transition
                hover:bg-neutral-100
              "
            >
              ← Dashboard
            </button>

            <span className="text-sm text-neutral-500">
              Saved ✓
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-4xl px-8 py-10">

            <EditorToolbar editor={editor} />

            <div
              className={`
                rounded-[36px]
                border
                border-white/40
                bg-white/70
                p-10
                shadow-2xl
                backdrop-blur-xl
                transition-all
                duration-500

                ${
                  note.theme === "midnight"
                    ? "border-neutral-800 bg-neutral-900/80"

                  : note.theme === "paper"
                   ? "border-amber-200 bg-amber-100/70"
                  : note.theme === "glass"
                    ? "border-white/30 bg-white/25"

                  : "border-white/40 bg-white/70"
                }
            `}
            >
              <input
                value={note.title}
                onChange={(e) =>
                  onUpdateTitle(e.target.value)
                }
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
                className="min-h-[75vh] cursor-text"
                onClick={() => editor.commands.focus()}
              >
                <EditorContent
                  editor={editor}
                  className="
                    prose
                    prose-lg
                    max-w-none
                    text-[21px]
                    leading-[1.8]
                    [&_.ProseMirror]:min-h-[75vh]
                    [&_.ProseMirror]:outline-none
                  "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-8 py-4 text-sm text-neutral-500">
            <span>
              {words} words • {characters} characters • {readingTime} min read
            </span>

            <span>Local Storage</span>
          </div>
        </div>

      </div>
    </AnimatedEditor>
  );
}