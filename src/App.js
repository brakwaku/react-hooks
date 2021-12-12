import "./App.css";
import Checked from "./components/Checked";
import FetchData from "./components/FetchData";
import MyUseEffect from "./components/MyUseEffect";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className="app-wrapper">
      <MyUseEffect /><br />
      <StarRating totalStars={5} />
      <Checked />
      <FetchData />
    </div>
  );
}

export default App;
