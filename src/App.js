import "./App.css";
import StarRating from "./components/StarRating";

function App({ name }) {
  return (
    <>
      <div className="App">
        <h1>Hello {name}!</h1>
      </div>
      <StarRating totalStars={5} />
    </>
  );
}

export default App;
