import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import About from './components/About.js';
import Services from './components/Services.js';
import Licenses from './components/Licenses';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Home from './components/Home';
import Test from './components/Test.js'
import SecurityGuardService from './components/VIewDetails/SecurityGuardService.js';
import HousekeepingService from './components/VIewDetails/HouseKeepingService.js';
import DriverService from './components/VIewDetails/DriverService.js';
import ExcavatorOperatorService from './components/VIewDetails/ExcavatorService.js';
import CookService from './components/VIewDetails/CookService.js';
import AMCService from './components/VIewDetails/AMCService.js';
import HorticultureService from './components/VIewDetails/HorticultureService.js';
import TreeCuttingService from './components/VIewDetails/TreeCuttingService.js';
import FieldFormService from './components/VIewDetails/FieldFormService.js';
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
        <Route path="/services/security-guard" element={<SecurityGuardService/>}></Route>
        <Route path="/services/house-keeping" element={<HousekeepingService/>}></Route>
        <Route path='/services/driver-service' element={<DriverService/>}></Route>
        <Route path='/services/excavator-operator' element={<ExcavatorOperatorService/>}></Route>
        <Route path='/services/cook-service' element={<CookService/>}></Route>
        <Route path='/services/amc-service' element={<AMCService/>}></Route>
        <Route path='/services/horticulture-service' element={<HorticultureService/>}></Route>
        <Route path='/services/tree-cutting-service' element={<TreeCuttingService/>}></Route>
        <Route path='/services/field-form-service' element={<FieldFormService/>}></Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

