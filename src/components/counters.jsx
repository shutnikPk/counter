import React from "react";

import Couonter from "./counter";

const Counters = (props) => {
  return (
    <div>
      {props.counters.map((counter) => (
        <Couonter
          key={counter.id}
          onDelete={props.onDelete}
          onIncriment={props.onIncriment}
          onDicriment={props.onDicriment}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
