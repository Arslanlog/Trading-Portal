import React from "react";
import Marq from "./Components/Marq";
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import SideNavBar from './Components/SideNavBar';
import Section from "./Components/Section";
import Contact from "./Components/Contact";
import Companies from './Components/Companies';
import CompDetail from './Components/Cards/CompDetail';
import Yarn from './Components/Yarn'
import './assets/css/Companies.css'
import './assets/css/bootstrap-wysihtml5.css'
import './assets/css/bootstrap.min.css'
import './assets/css/SearchBar.css';
import './assets/css/SearchFilter.css';
import './assets/css/Section.css'
import './assets/css/Charts.css'
import './assets/css/CompCards.css'
import './assets/css/Contact.css'
import "./assets/css/Footer.css"
import './assets/css/Marqe.css'
import "./assets/css/Style.css"
// import "./assets/css/Comp.css"
// import "./assets/css/responsive.css"

import {  Route, Routes } from "react-router-dom";
import CompanyDetail from "./CompanyDetails/CompanyDetail";
function App() {
  return (
    <>
      <SideNavBar />
      <NavBar />
      <Marq />
      
        <Routes>
          <Route exact path="/" element={<Section />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Yarn" element={<Yarn />} />
        </Routes>
      <Footer />
      {/* <CompDetail/> */}
      <CompanyDetail />
    </>
  );
}

export default App;
