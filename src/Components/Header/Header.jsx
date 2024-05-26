import React from "react";
import "./Css/header-style.css";
import {Link} from "react-router-dom";
import Logo from "./Images/logo.png";
import popup  from "./Images/popup.png";

const Header =()=>{
    const openNav=()=>{
      document.getElementById("myNav").classList.toggle("menu-show");
    }

    const ChangeColor=(cls)=>{
      if(cls==='home'){ 
        document.getElementById('about').style.color="";  
        document.getElementById('atm').style.color ="";  
        document.getElementById('merchant').style.color ="";
        document.getElementById('blog').style.color ="";
        document.getElementById('contact').style.color=""; 
      }else if(cls==="about"){
        document.getElementById('about').style.color="#0d6efd";  
        document.getElementById('atm').style.color ="";  
        document.getElementById('merchant').style.color ="";
        document.getElementById('blog').style.color ="";
        document.getElementById('contact').style.color=""; 
      }else if(cls==="atm"){
        document.getElementById('about').style.color="";  
        document.getElementById('atm').style.color ="#0d6efd";  
        document.getElementById('merchant').style.color ="";
        document.getElementById('blog').style.color ="";
        document.getElementById('contact').style.color=""; 
      }else if(cls==="merchant"){
        document.getElementById('about').style.color="";  
        document.getElementById('atm').style.color ="";  
        document.getElementById('merchant').style.color ="#0d6efd";
        document.getElementById('blog').style.color ="";
        document.getElementById('contact').style.color=""; 
      }else if(cls==="blog"){
        document.getElementById('about').style.color="";  
        document.getElementById('atm').style.color ="";  
        document.getElementById('merchant').style.color ="";
        document.getElementById('blog').style.color ="#0d6efd";
        document.getElementById('contact').style.color=""; 
      }else if(cls==="contact"){
        document.getElementById('about').style.color="";  
        document.getElementById('atm').style.color ="";  
        document.getElementById('merchant').style.color ="";
        document.getElementById('blog').style.color ="";
        document.getElementById('contact').style.color="#0d6efd"; 
      }else{
        document.getElementById('about').style.color="";  
        document.getElementById('atm').style.color ="";  
        document.getElementById('merchant').style.color ="";
        document.getElementById('blog').style.color ="";
        document.getElementById('contact').style.color=""; 
      }
    }
    var toTop = document.getElementById("toTop");
    window.onscroll = function() {myFunction()};
    function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    }
    const totop=()=>{ 
    window.scrollTo(0,-50000);
    }
    window.addEventListener("scroll", e => {
    toTop = document.getElementById("toTop");
    toTop.style.display = window.scrollY > 100 ? "block" : "none";
    })
    return(
        <>
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
        <div className="header-bottom-line">
        <div className="container-lg">          
          <div className="row  p-0">
            <div className=" offset-sm-1 col-5 p-0 ">
             <div className="logo" id="home"  onClick={()=>{ChangeColor("home")}}>
              <Link to="/"><img src={Logo}/></Link>
            </div>    
            </div>
            <div className="col-6  p-0">
              <div className="col-12 p-0">   
              <div className="support-sig-up">
                <p>Support :</p> <span>888-976-2747 </span> <button>Sign Up</button> 
              </div>
              </div>
              <div className="col-12 p-0">

              <div className="nav-bar">
                <ul id="myNav">
                  <li  onClick={()=>{ChangeColor("about")}}><Link  id="about" to="/About">About</Link></li>
                  <li  onClick={()=>{ChangeColor("atm")}}><Link id="atm" to="/Atm">ATM Solutions</Link></li>
                  <li  onClick={()=>{ChangeColor("merchant")}}><Link id="merchant" to="/Merchant">Merchant Solutions</Link></li>
                  <li  onClick={()=>{ChangeColor("blog")}}><Link id="blog" to="/Blog">Blog</Link></li>
                  <li  onClick={()=>{ChangeColor("contact")}}><Link id="contact" to="/Contact">Contact</Link></li>
                </ul>
                <button onClick={()=>{openNav()}} className="navbar-icon">&#9776; </button>
                </div>
                  <div className="btn-top" id="toTop" onClick={()=>{totop()}}>
                    <img src={popup} alt="" />
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </>
    )
}

export default Header;