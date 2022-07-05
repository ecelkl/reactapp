import React, { useState } from "react";

export const NewTodoForm = ({ onClickCreate }) => {
  const [inputValue, setInputValue] = useState(" ");
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br></br> <br></br>
      <button
        onClick={() => {
          onClickCreate(inputValue);
          setInputValue("");
        }}
      >
        Create
      </button>
      <br></br> <br></br>
      <span>&#128150;</span>
    </div>
  );
};
