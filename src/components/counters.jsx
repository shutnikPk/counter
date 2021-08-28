import React, { useState } from "react";

import Couonter from "./counter";

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Banana" },
    { value: 8, id: 2, name: "Aple" },
    { value: 0, id: 3, name: "PineAple" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (deletedId) => {
    const newState = counters.filter((e) => e.id !== deletedId);
    setCounters(newState);
  };

  const handleIncriment = (productId) => {
    const newState = counters.map((e) => {
      if (e.id === productId) {
        e.value++;
      }
      return e;
    });
    return setCounters(newState);
  };

  const handleDicriment = (productId) => {
    const newState = counters.map((e) => {
      if (e.id === productId) {
        e.value === 0 ? (e.value = 0) : e.value--;
      }
      return e;
    });
    return setCounters(newState);
  };

  return (
    <div>
      {counters.map((e) => (
        <Couonter
          key={e.id}
          value={e.value}
          name={e.name}
          onDelete={() => handleDelete(e.id)}
          onIncriment={() => handleIncriment(e.id)}
          onDicriment={() => handleDicriment(e.id)}
        />
      ))}
    </div>
  );
};

export default Counters;
