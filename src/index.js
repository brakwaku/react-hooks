import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaStar } from 'react-icons/fa';   // npm install react-icons
// import App from './App';

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/users')
  //     .then((response) => response.json())
  //     .then(setData);
  // }, []);

  // if (data) {
  //   return (
  //     <ul>
  //       {data.map((user) => (
  //         <li key={user.id}>{user.login}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // return <p>No User</p>

//   const [name, setName] = useState("Dan");
//   const [admin, setAdmin] = useState(false);

//   useEffect(() => {
//     document.title = `Celebrate ${name}`
//   }, [name]);

//   useEffect(() => {
//     console.log(`The user is: ${admin ? "Admin" : "Not admin"}`)
//   }, [admin]);

//   return(
//     <section>
//       <p>Congratulations {name}!</p>
//       <button onClick={() => {setName(name === "Dan" ? "Ben" : "Dan")}}>Change winner</button>
//       <p>{admin ? "logged in" : "not logged in"}</p>
//       <button onClick={() => setAdmin(true)}>Log In</button>
//     </section>
//   );


const [checked, setChecked] = useState(false);
return (
  <div className="App">
    <input
      type="checkbox"
      value={checked}
      onChange={() => { setChecked((checked) => !checked) }} />
    <p>{checked ? "Checked" : "Not checked"}</p>
  </div>
);
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
