import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info, curId, toggleCurId }) => {
  const isActive = curId === id;

  return (
    <header>
      <h5>{title}</h5>
      {isActive && <p>{info}</p>}
      <button className="question-btn" onClick={() => toggleCurId(id)}>
        {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </header>
  );
};

export default SingleQuestion;
