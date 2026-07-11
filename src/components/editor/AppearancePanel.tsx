"use client";

import { PanelRightClose, PanelRightOpen } from "lucide-react";

type Props = {
  open: boolean;
  onToggle: () => void;
};

export function AppearancePanel({
  open,
  onToggle,
}: Props) {
  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        className="
          fixed
          right-6
          top-1/2
          z-50
          -translate-y-1/2
          rounded-full
          border
          border-white/20
          bg-white/10
          p-3
          shadow-xl
          backdrop-blur-xl
          transition
          hover:scale-105
        "
      >
        {open ? (
          <PanelRightClose size={20} />
        ) : (
          <PanelRightOpen size={20} />
        )}
      </button>

      <aside
        className={`
          fixed
          right-0
          top-0
          z-40
          h-screen
          w-80
          border-l
          border-white/20
          bg-white/10
          shadow-2xl
          backdrop-blur-2xl
          transition-transform
          duration-300

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <div className="p-8">
          <h2 className="text-xl font-semibold">
            Appearance
          </h2>

          <p className="mt-3 text-sm text-neutral-500">
            Themes, fonts and layout controls will
            appear here.
          </p>
        </div>
      </aside>
    </>
  );
}