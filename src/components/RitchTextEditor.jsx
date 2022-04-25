import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default function RitchTextEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const contentHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );

  // console.log(contentHtml);

  // useEffect(() => {
  //   console.log(editorState);
  // }, [editorState]);

  return (
    <div>
      <h1>React Editors</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div
        style={{
          border: "1px solid black",
          padding: "2px",
        }}
      >
        <Editor
          editorStyle={{ height: "400px", overflowY: "auto" }}
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
      <br />
      <br />
      {/* <div
        dangerouslySetInnerHTML={{
          __html: contentHtml,
        }}
      ></div> */}
    </div>
  );
}
