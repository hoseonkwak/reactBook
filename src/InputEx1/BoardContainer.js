import React, { useState } from "react";
import BoardInput from "./BoardInput";
import BoardResult from "./BoardResult";

export default function BoardContainer() {
  const [inputData, setInputData] = useState({ content: "" });

  const onCopy = (props) => {
    setInputData(props.content);
  };

  return (
    <div>
      <div>
        <BoardInput onCopy={onCopy} />
      </div>
      <hr />
      <div>
        <BoardResult inputData={inputData} />
      </div>
    </div>
  );
}
