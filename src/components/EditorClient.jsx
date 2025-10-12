"use client";

import { Editor } from "@tinymce/tinymce-react";

export default function EditorClient({ value, onChange }) {
  return (
    <Editor
      apiKey={process.env.Tinymce_Secert_key}
      value={value} // ✅ show existing content
      onEditorChange={(content) => onChange(content)} // ✅ send new content up
      init={{
        height: 400,
        plugins: "lists link image table code help wordcount",
        toolbar:
          "undo redo | formatselect | bold italic emoticons | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",
      }}
    />
  );
}
