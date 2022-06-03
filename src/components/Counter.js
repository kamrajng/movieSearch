import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);



  return (
    <>
      <button onClick={() => setCounter((prevCount) => prevCount - 5)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 5)}>
        +
      </button>
      <button onClick={() => alert("total of " + counter)}> = </button>{" "}
    </>
  );
};

export default Counter;
