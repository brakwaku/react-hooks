import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checked from "./components/Checked";
import FetchData from "./components/FetchData";
import MyUseEffect from "./components/MyUseEffect";
import StarRating from "./components/StarRating";
import HomeScreen from "./screens/HomeScreen";
import MyUseReducerScreen from "./screens/MyUseReducerScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} exact />
        <Route path='/use-reducer' element={<MyUseReducerScreen />} exact />
      </Routes>
    </Router>
  );
}

export default App;
