import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const counterForm = () => {
    return count === 0 ? "Zero" : count;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    return (classes += count === 0 ? "danger" : "primary");
  };

  const handleIncriment = (productId) => {
    setCount(count + 1);
  };

  const handleDicriment = (productId) => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <>
      <span className={getBageClasses()}>{counterForm()}</span>
      <button
        onClick={() => handleIncriment({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => handleDicriment({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Dicrement
      </button>
    </>
  );
};

export default Counter;
