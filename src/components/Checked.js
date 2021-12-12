import React, { useState, useReducer } from "react";

const Checked = () => {
  const [checked, setChecked] = useState(false);
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );
  const [checked2, toggle] = useReducer((checked2) => !checked2, false);

  return (
    <>
      <div className="App">
        <input
          type="checkbox"
          value={checked}
          onChange={() => {
            setChecked((checked) => !checked);
            setNumber(1);
          }}
        />
        <p>
          {checked ? "Checked" : "Not checked"} and clicked {number} times
        </p>
      </div>

      <div className="App">
        <input
          type="checkbox"
          value={checked2}
          onChange={toggle}
        />
        <p>
          {checked2 ? "Checked" : "Not checked"}
        </p>
      </div>
    </>
  );
};

export default Checked;
