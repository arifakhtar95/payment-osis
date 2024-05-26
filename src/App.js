import React from "react";
import Header from "./Components/Header/Header.jsx"
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Atm from  "./Components/Atm/Atm.jsx"
import Merchant from "./Components/Merchant/Merchant.jsx"
import Contact from "./Components/Contact/Contact.jsx";
import Blog from "./Components/Blog/Blog.jsx";

import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/Atm" element={<Atm/>} />
          <Route exact path="/Merchant" element={<Merchant/>} />
          <Route exact path="/Blog" element={<Blog/>} />
          <Route exact path="/Contact" element={<Contact/>} />

        </Routes>
      <Footer/>
    </Router>

    </>
  );
}

export default App;
