import { useState } from "react";
import questions from "./data";
import SingleQuestion from "./components/SingleQuestion";

export default function App() {
  const [curId, setCurId] = useState(null);
  const toggleCurId = (id) => {
    const activeId =
      id === curId
        ? null
        : id; /*if the active id is the id clicked, set it to null so it can be closed*/
    setCurId(activeId);
  };

  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questions.map((question) => (
          <div className="question" key={question.id}>
            <SingleQuestion
              {...question}
              curId={curId}
              toggleCurId={toggleCurId}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
