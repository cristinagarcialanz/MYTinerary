import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Sesions from './components/Sesions';
import CityDetail from './components/SesionDetail';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Cities' element={<Sesions/>} />
        <Route path='/CityDetail/:id' element={<CityDetail/>} />

        <Route path="*" element={<h2>¡Page not found!</h2>} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
