import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import About from './components/About.js';
import Services from './components/Services.js';
import Licenses from './components/Licenses';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Home from './components/Home';
import Test from './components/Test.js'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/licenses" element={<Licenses/>}></Route>
        <Route path="/careers" element={<Careers/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/test' element={<Test/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

