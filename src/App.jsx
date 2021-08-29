import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
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
    setCounters(newState);
  };

  const handleDicriment = (productId) => {
    const newState = counters.map((e) => {
      if (e.id === productId) {
        e.value === 0 ? (e.value = 0) : e.value--;
      }
      return e;
    });
    setCounters(newState);
  };

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar />
        <Counters
          onDelete={handleDelete}
          onIncriment={handleIncriment}
          onDicriment={handleDicriment}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
