import React, { useState } from "react";

const Checked = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        onChange={() => {
          setChecked((checked) => !checked);
        }}
      />
      <p>{checked ? "Checked" : "Not checked"}</p>
    </div>
  );
};

export default Checked;
