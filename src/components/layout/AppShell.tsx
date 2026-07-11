"use client";

import { ReactNode } from "react";

type AppShellProps = {
  sidebar: ReactNode;
  children: ReactNode;
};

export function AppShell({
  sidebar,
  children,
}: AppShellProps) {
  return (
    <main
      className= "flex h-screen overflow-hidden bg-white"

    >
      <aside
        className="h-full border-r border-neutral-200 bg-white"
      >
        {sidebar}
      </aside>

      <section
        className="flex-1 overflow-hidden bg-white"
      >
        {children}
      </section>
    </main>
  );
}