import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [code, setCode] = useState("// Start coding here...");

  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{ backgroundColor: "#1e1e1e", color: "#fff", padding: "10px" }}>
        <h2>VS Code Clone</h2>
      </header>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
      />
    </div>
  );
}

export default App;
