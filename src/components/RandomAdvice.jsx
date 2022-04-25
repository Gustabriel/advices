import "../styles.css";
import React from "react";

const RandomAdvice = ({ data }) => {
  return (
    <div className="App">
      <h3 className="id-advice">
        {data.id <= 0
          ? "Read some advice and improve your day!"
          : `ADVICE: #${data.id}`}
      </h3>
      <h2 className="advice"> {data && data.advice}</h2>
    </div>
  );
};

export default RandomAdvice;
