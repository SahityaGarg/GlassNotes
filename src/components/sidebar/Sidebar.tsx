"use client";

import { Plus } from "lucide-react";

import { Note } from "@/types/note";
import { formatRelativeTime } from "@/lib/time";


type SidebarProps = {
  notes: Note[];
  selectedNoteId: string | null;
  onSelectNote: (id:string)=>void;
  onCreateNote:()=>void;
  onDeleteNote:(id:string)=>void;
};


export function Sidebar({

  notes,
  selectedNoteId,
  onSelectNote,
  onCreateNote,
  onDeleteNote,

}:SidebarProps){


return (

<aside className="
hidden
w-72
border-r
border-gray-200
md:flex
md:flex-col
">


<div className="
border-b
border-gray-200
p-5
">


<div className="
flex
items-center
justify-between
">


<h1 className="
text-xl
font-semibold
tracking-tight
">
GlassNotes
</h1>


<button

onClick={onCreateNote}

className="
rounded-lg
p-2
transition
hover:bg-gray-100
"

>

<Plus size={18}/>

</button>


</div>

</div>



<div className="
flex-1
overflow-y-auto
">


{notes.map((note)=>(


<div
key={note.id}
className="
group
relative
"
>


<button

onClick={()=>onSelectNote(note.id)}

className={`

w-full
px-5
py-4
text-left
transition
hover:bg-gray-100

${
selectedNoteId===note.id
?"bg-gray-100"
:""

}

`}

>


<h3 className="
truncate
font-medium
">

{note.title || "Untitled Note"}

</h3>


<p className="
mt-1
text-sm
text-gray-400
">

Updated {formatRelativeTime(note.updatedAt)}

</p>


</button>



<button

onClick={()=>onDeleteNote(note.id)}

className="
absolute
right-4
top-4
hidden
text-xs
text-red-400
group-hover:block
hover:text-red-600
"

>

Delete

</button>



</div>


))}


</div>


</aside>

);

}