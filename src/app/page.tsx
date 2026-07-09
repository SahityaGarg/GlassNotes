import { Sidebar } from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="flex h-screen bg-white">
      <Sidebar />

      <section className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Welcome to GlassNotes
          </h2>

          <p className="mt-3 text-gray-500">
            Milestone 2 — Sidebar
          </p>
        </div>
      </section>
    </main>
  );
}