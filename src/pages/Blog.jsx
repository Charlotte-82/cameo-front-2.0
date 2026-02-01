import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function BlogEditor({ onSave }) {
  const [content, setContent] = useState("");

  return (
    <div className="p-4">
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
        config={{
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "blockQuote",
            "numberedList",
            "bulletedList",
            "|",
            "insertTable",
            "uploadImage",
            "mediaEmbed",
            "|",
            "undo",
            "redo",
          ],
        }}
      />

      <button
        onClick={() => onSave(content)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Sauvegarder
      </button>
    </div>
  );
}
