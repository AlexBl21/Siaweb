import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} 

from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact';
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home/>} ></Route>
    //     <Route path="/contact" element={<Contact/>} ></Route>
    //   </Routes>
    // </Router>
    <Home/>
  );
}

export default App;
