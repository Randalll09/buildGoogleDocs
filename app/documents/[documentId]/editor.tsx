"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";

export const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        //style attr is for dynamic styling
        style: "padding-left:56px; padding-right:56px",
        //class attr is for fixed styling
        class:
          "focus:outline-none print:border-0 border bg-white border-[#c7c7c7] w-[816px] flex flex-col min-h-[1054px] pt-10 pr-14 pb-10 cursor-text",
      },
    },
    extensions: [
      StarterKit,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:bg-white print:p-0 print:overflow-auto">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
