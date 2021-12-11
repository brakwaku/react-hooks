import React, { useState, useEffect } from "react";

const MyUseEffect = () => {
  const [name, setName] = useState("Dan");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    document.title = `Celebrate ${name}`;

    console.log(`The user is: ${admin ? "Admin" : "Not admin"}`);
  }, [name, admin]);

  return (
    <>
      <div className="App">
        <h1>Hello {name}!</h1>
      </div>

      <section>
        <p>Congratulations {name}!</p>
        <button
          onClick={() => {
            setName(name === "Dan" ? "Ben" : "Dan");
          }}
        >
          Change winner
        </button>
        <p>{admin ? "logged in" : "not logged in"}</p>
        <button onClick={() => setAdmin(true)}>Log In</button>
      </section>
    </>
  );
};

export default MyUseEffect;
