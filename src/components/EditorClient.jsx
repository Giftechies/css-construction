"use client";

import { Editor } from "@tinymce/tinymce-react";

export default function EditorClient({ value, onChange }) {
  return (
    <Editor
      apiKey="7ihkmza20bei6j12tfhydm0k9xgmzws3sytjtxmo3y5gv9no"
      value={value} // ✅ show existing content
      onEditorChange={(content) => onChange(content)} // ✅ send new content up
      init={{
        height: 500,
        plugins: "lists link image table code help wordcount",
        toolbar:
          "undo redo | formatselect | bold italic emoticons | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",
      }}
    />
  );
}
