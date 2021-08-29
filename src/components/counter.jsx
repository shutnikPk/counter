import React from "react";

const Counter = (props) => {
  const formValue = () => {
    return props.value === 0 ? "Zero" : props.value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    return (classes += props.value === 0 ? "danger" : "primary");
  };

  return (
    <>
      <h6>{props.name}</h6>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        onClick={() => props.onIncriment(props.id)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => props.onDicriment(props.id)}
        className="btn btn-secondary btn-sm"
      >
        Dicrement
      </button>
      <button
        onClick={() => props.onDelete(props.id)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    </>
  );
};

export default Counter;
