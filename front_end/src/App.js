import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from './components/AboutUs.jsx';
import Home from './components/Home.jsx';
import Strayhelper from './components/Strayhelper.jsx';
import GeneralDiscussions from './components/GeneralDiscussions.jsx';
import SuccessStories from './components/SuccessStories.jsx';
import FindHelp from './components/FindHelp.jsx';
import ContactUs from './components/ContactUs';
import FindAPet from './components/FindAPet.jsx';
import ListAPet from './components/ListAPet.jsx';
import ClinicalServices from './components/ClinicalServices.jsx';
import DoctorSelection from './components/DoctorSelection';
import Appointment from './components/Appointment.jsx';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const App = () => {
  const location = useLocation();
  const noNavbarRoutes = ['/', '/login', '/register'];

  return (
    <div className="App">
      {!noNavbarRoutes.includes(location.pathname.toLowerCase()) && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/strayhelper" element={<Strayhelper />} />
        <Route path="/general-discussions" element={<GeneralDiscussions />} />
        <Route path="/find-help" element={<FindHelp />} />
        <Route path="/success-stories" element={<SuccessStories />} /> 
        <Route path="/contactus" element={<ContactUs />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/findapet" element={<FindAPet />} />
        <Route path="/listapet" element={<ListAPet />} />
        <Route path="/clinicalservices" element={<ClinicalServices />} />
        <Route path="/DoctorSelection/:service" element={<DoctorSelection />} />
        <Route path="/appointment/:vetId" element={<Appointment />} />
        {/* <Route path="/appointment" element={<Appointment />} />   */}
        <Route path="/pets/:category" element={<PetList />} />
        <Route path="/pets/:category/:petId" element={<PetDetails />} />
      </Routes>
      
      {!noNavbarRoutes.includes(location.pathname.toLowerCase()) && <Footer />}
    </div>
  );
}

export default App;
