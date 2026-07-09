import {
  FileText,
  Plus,
  Search,
  Settings,
  Star,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-gray-200 bg-white md:flex md:flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-5">
        <h1 className="text-xl font-semibold tracking-tight">
          GlassNotes
        </h1>
      </header>

      {/* Actions */}
      <div className="space-y-2 p-4">
        <button 
         type="button"
         className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100">
          <Plus size={18} />
          New Note
        </button>

        <button 
         type="button"
         className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-gray-100">
          <Search size={18} />
          Search
        </button>
      </div>

      {/* Notes */}
      <div className="flex-1 px-4">
        <p className="mb-2 px-3 text-xs font-medium text-gray-400">
          NOTES
        </p>

        <button 
         type="button"
         className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-gray-100">
          <FileText size={18} />
          All Notes
        </button>

        <button 
         type="button"
         className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-gray-100">
          <Star size={18} />
          Favorites
        </button>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4">
        <button 
         type="button"
         className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-gray-100">
          <Settings size={18} />
          Settings
        </button>
      </div>
    </aside>
  );
}