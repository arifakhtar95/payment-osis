import React from "react";
import "./Css/footer-style.css";
import FooterVisaCard from "./Images/footer-visa-card.png";

const Footer=()=>{
    return(
        <>
            <div className="footer-outer">
            <div className="container-xl">
                <div className="row">
                <div className="col-md-6">
                    <div className="call-today">
                    <h2>Call Today</h2>
                    <p>To Get 2 Month Free</p>
                    <button> +1.855.550.3288</button>
                    </div>
                </div>
                {/* <div className="col-md-6">
                    <p> Content Commdents </p>
                </div> */}
                </div>
                <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer-list">
                    <h6>Industry?</h6>
                    <ul>                   
                    <li><a href="">Ecommerce</a></li>
                    <li><a href="">Healthcare</a></li>
                    <li><a href="">Legal</a></li>
                    <li><a href="">Professional Services</a></li>
                    <li><a href="">Food + Beverage</a></li>
                    <li><a href="">Retail</a></li>
                    <li><a href="">Spa + Fitness</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer-list">
                    <h6>Products</h6>
                    <ul>
                        <li><a href="">Mobile</a></li>
                        <li><a href="">Shopping Cart</a></li>
                        <li><a href="">Integrations</a></li>
                        <li><a href="">Virtual Terminal</a></li>
                        <li><a href="">Terminals</a></li>
                        <li><a href="">API</a></li>
                        <li><a href="">Platform</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer-list">
                    <h6>Company</h6>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">How it Works</a></li>
                        <li><a href="">Savings Calculator</a></li>
                        <li><a href="">Solutions</a></li>
                        <li><a href="">Our Customers</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer-list">
                    <h6>Reach Out</h6>
                    <ul>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Partner</a></li>
                        <li><a href="">Referral</a></li>
                        <li><a href="">Help Center</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer-list">
                    <h6>Legal</h6>
                    <ul>
                        <li><a href="">Terms and Conditions</a></li>
                        <li><a href="">Privacy and Policy</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer-list">
                    <h6>Call a Payment Consult</h6>
                    <ul>
                        <li><i className="fa fa-phone"></i> <a href="">888-976-2747</a></li>
                        <li>Social Media</li>
                        <li><span>
                        <a href=""> <i className="fa fa-facebook" ></i> </a>
                        <a href=""> <i className="fa fa-instagram" ></i> </a>
                        <a href=""> <i className="fa fa-twitter" ></i> </a>              
                        </span></li>
                    </ul>
                    <div className="visa-card">
                        <ul>
                            <li><figure><img src={FooterVisaCard}/> </figure></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
                
        </>
    )
}
export default Footer;