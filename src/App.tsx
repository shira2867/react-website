
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './components/home-page/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/Contact';
function App() {
  return (
    
    <div>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;

 
