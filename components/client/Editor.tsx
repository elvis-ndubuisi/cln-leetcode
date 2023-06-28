"use client";
import Split from "react-split";

type EditorProps = {};

const Editor: React.FC<EditorProps> = () => {
  return (
    <Split className="split" direction="vertical" gutterSize={4}>
      <div>asasdfsadfadsd</div>
      <div>asdasdfasdfasdfsadff</div>
    </Split>
  );
};
export default Editor;
