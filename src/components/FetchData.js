import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <>
      <a href="/use-reducer"><button>Use Reducer</button></a>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div>
      <p>No User</p>
    </div>
  );
};

export default FetchData;
