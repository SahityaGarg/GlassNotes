"use client";

import {
  PanelRightClose,
  PanelRightOpen,
} from "lucide-react";

import { NoteTheme } from "@/types/note";

type Props = {
  open: boolean;
  onToggle: () => void;

  theme: NoteTheme;

  onThemeChange: (theme: NoteTheme) => void;
};

const themes: NoteTheme[] = [
  "default",
  "paper",
  "midnight",
  "glass",
];

export function AppearancePanel({
  open,
  onToggle,
  theme,
  onThemeChange,
}: Props) {
  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        className="
          fixed
          right-8
          top-1/2
          z-50
          -translate-y-1/2
          rounded-full
          border
          border-white/20
          bg-white/20
          p-3
          shadow-xl
          backdrop-blur-xl
          transition-all
          hover:scale-110
        "
      >
        {open ? (
          <PanelRightClose size={20} />
        ) : (
          <PanelRightOpen size={20} />
        )}
      </button>

      <div
        className={`
          fixed
          right-24
          top-1/2
          z-40
          -translate-y-1/2
          transition-all
          duration-300

          ${
            open
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0 pointer-events-none"
          }
        `}
      >
        <div
          className="
            w-72
            rounded-[32px]
            border
            border-white/20
            bg-white/20
            p-6
            shadow-2xl
            backdrop-blur-2xl
          "
        >
          <h2 className="text-xl font-semibold">
            Appearance
          </h2>

          <p className="mt-6 text-sm text-neutral-400">
            Theme
          </p>

          <div className="mt-3 space-y-2">
            {themes.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onThemeChange(item)}
                className={`
                  w-full
                  rounded-xl
                  px-4
                  py-3
                  text-left
                  capitalize
                  transition

                  ${
                    theme === item
                      ? "bg-black text-white"
                      : "bg-white hover:bg-neutral-100"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}