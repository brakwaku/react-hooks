import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import MyUseReducerScreen from './screens/MyUseReducerScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/use-reducer" element={<MyUseReducerScreen />} exact />
      </Routes>
    </Router>
  );
}

export default App;
