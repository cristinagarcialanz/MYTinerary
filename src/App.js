import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cities from './components/Cities';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path='*' element={<Home/>} ></Route>
        <Route path='/Home' element={<Home/>} ></Route>
        <Route path='/Cities' element={<Cities/>} ></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
