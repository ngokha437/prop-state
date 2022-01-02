import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Menubar from './components/Home/Menubar/Menubar';
import About from './components/Home/About/About';
import {Route, Routes, BrowserRouter} from "react-router-dom";

function App() {
  return (
      <div>
        <BrowserRouter>
        <Menubar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
