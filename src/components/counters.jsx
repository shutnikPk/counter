import React from "react";

import Couonter from "./counter";

const Counters = ({ counters, ...rest }) => {
  return (
    <div>
      {counters.map((counter) => (
        <Couonter
          key={counter.id}
          {...counter}
          {...rest}
        />
      ))}
    </div>
  );
};

export default Counters;
