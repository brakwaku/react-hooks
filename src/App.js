import "./App.css";
import Checked from "./components/Checked";
import MyUseEffect from "./components/MyUseEffect";
import StarRating from "./components/StarRating";

function App() {
  return (
    <>
      <StarRating totalStars={5} />
      <MyUseEffect />
      <Checked />
    </>
  );
}

export default App;
