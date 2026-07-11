"use client";

import type { Editor } from "@tiptap/react";

type Props = {
  editor: Editor;
};

export function EditorToolbar({
  editor,
}: Props) {
  return (
    <div
      className="
        sticky
        top-0
        z-10
        mb-8
        flex
        flex-wrap
        gap-2
        border
        border-neutral-200
        bg-white/90
        p-3
        backdrop-blur
      "
    >
      <ToolbarButton
        active={editor.isActive("bold")}
        onClick={() =>
          editor.chain().focus().toggleBold().run()
        }
      >
        Bold
      </ToolbarButton>

      <ToolbarButton
        active={editor.isActive("italic")}
        onClick={() =>
          editor.chain().focus().toggleItalic().run()
        }
      >
        Italic
      </ToolbarButton>

      <ToolbarButton
        active={editor.isActive("codeBlock")}
        onClick={() =>
          editor.chain().focus().toggleCodeBlock().run()
        }
      >
        Code
      </ToolbarButton>

      <ToolbarButton
        active={false}
        onClick={() =>
          editor.chain().focus().undo().run()
        }
      >
        Undo
      </ToolbarButton>

      <ToolbarButton
        active={false}
        onClick={() =>
          editor.chain().focus().redo().run()
        }
      >
        Redo
      </ToolbarButton>
    </div>
  );
}

type ToolbarButtonProps = {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
};

function ToolbarButton({
  children,
  active,
  onClick,
}: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onMouseDown={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`
        rounded-lg
        border
        px-3
        py-2
        text-sm
        transition
        ${
          active
            ? "border-black bg-black text-white"
            : "border-neutral-200 hover:bg-neutral-100"
        }
      `}
    >
      {children}
    </button>
  );
}