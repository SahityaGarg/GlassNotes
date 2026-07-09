export default function Home() {
  return (
    <main className="flex h-screen bg-white">
      {/* Sidebar Placeholder */}
      <aside className="hidden w-72 border-r border-gray-200 md:flex md:flex-col">
        <div className="border-b border-gray-200 px-6 py-5">
          <h1 className="text-xl font-semibold tracking-tight">
            GlassNotes
          </h1>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <p className="text-sm text-gray-400">Sidebar Placeholder</p>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Welcome to GlassNotes
          </h2>

          <p className="mt-3 text-gray-500">
            Milestone 1 — Application Shell
          </p>
        </div>
      </section>
    </main>
  );
}