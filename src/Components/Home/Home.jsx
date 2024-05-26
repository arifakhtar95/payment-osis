import React from "react";
import "./Css/home-style.css";
import "./Css/home-responsive-style.css"
import Carousel from 'react-bootstrap/Carousel';
import brand_1 from "./Images/brand-1.png";
import brand_2 from "./Images/brand-2.png";
import brand_3 from "./Images/brand-3.png";
import brand_4 from "./Images/brand-4.png";
import brand_5 from "./Images/brand-5.png";
import testimonial_bg from "./Images/testimonial-bg.jpg";
import author from "./Images/author.jpg";
import Intro_Pic from "./Images/intro-pic.jpg";
import Solution from "./Images/solution.jpg";
import Service_top from "./Images/service-top.jpg";
import service_1 from "./Images/service-1.png";
import service_2 from "./Images/service-2.png";
import service_3 from "./Images/service-3.png";
import Cardslider from "./Cardslider.jsx"

const Home=()=>{
    const openPage=(pageName)=> {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
        }
        document.getElementById(pageName).style.display = "block";
        if(pageName==='Home'){
            document.getElementById('Home-btn').style.backgroundColor="#eaf3fa";
            document.getElementById('News-btn').style.backgroundColor="white";   
            
            document.getElementById('News-btn').addEventListener("mouseenter",()=>{
            document.getElementById('News-btn').style.backgroundColor ="#eaf3fa";
            })
            document.getElementById('News-btn').addEventListener("mouseout",()=>{
            document.getElementById('News-btn').style.backgroundColor ="white";
            })           
        }
        else if(pageName==='News'){
            document.getElementById('News-btn').style.backgroundColor="#eaf3fa";
            document.getElementById('News-btn').addEventListener("mouseout",()=>{
            document.getElementById('News-btn').style.backgroundColor ="#eaf3fa";
            })
        }
        else if(pageName==='Contact'){
            document.getElementById('Contact-btn').style.backgroundColor="#eaf3fa";
            document.getElementById('News-btn').style.backgroundColor="white";

            document.getElementById('News-btn').addEventListener("mouseenter",()=>{
            document.getElementById('News-btn').style.backgroundColor ="#eaf3fa";
            })
            document.getElementById('News-btn').addEventListener("mouseout",()=>{
            document.getElementById('News-btn').style.backgroundColor ="white";
            })  
        }
        else if(pageName==='About'){
            document.getElementById('About-btn').style.backgroundColor="#eaf3fa";
            document.getElementById('News-btn').style.backgroundColor="white";

            document.getElementById('News-btn').addEventListener("mouseenter",()=>{
            document.getElementById('News-btn').style.backgroundColor ="#eaf3fa";
            })
            document.getElementById('News-btn').addEventListener("mouseout",()=>{
            document.getElementById('News-btn').style.backgroundColor ="white";
            })  
        }else{            
        }
    }      
    return(
        <>
            <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 p-0">
                <div className="home-content-1-outer">
                    <div className="home-content-1-inner">
                    <div className="title-caption">
                        <h2>
                        <span>Brands that Trust our Merchant Solutions,</span>
                        Merchant Solutions for your business needs 
                        </h2>
                        <p>Direct wholesale pricing. Hassle free sign-up. No surprises!</p>
                        <button type="button" className="slide-btn-1">get started </button>
                        <button type="button" className="slide-btn-2">Learn More </button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-6 p-0">
                <div className="home-content-2-inner">
                </div>
                </div>
                <div className="12">
                <div className="payment-brand-outer">
                    <h3 className="brand-title">Brands That Trust Our Clients</h3>
                    <div className="row brand-inner">            
                    <ul className="brand-images">
                    <li className="payment-col-2"> <figure> <img src={brand_1} alt="brand_1"/> </figure> </li>
                    <li className="payment-col-2"> <figure> <img src={brand_2} alt="brand_2"/> </figure> </li>
                    <li className="payment-col-2"> <figure> <img src={brand_3} alt="brand_3"/> </figure> </li>
                    <li className="payment-col-2"> <figure> <img src={brand_4} alt="brand_4"/> </figure> </li>
                    <li className="payment-col-2"> <figure> <img src={brand_5} alt="brand_5"/> </figure> </li>
                    </ul>
                    </div>
                </div>
                </div>        
            </div>
            </div>        
            <div className="payment-testimonials">
            <div className="container-lg">
                <div className="row">
                <div className="col-lg-7 col-md-6">
                <div className="testimonial-left">
                    <figure><img src={testimonial_bg} alt="testimonia-bg"/></figure>
                </div>
                </div>
                <div className="col-lg-5 col-md-6"> 
                    <div className="testimonial-right">
                    <div className="testimonial-header">
                        <h2 className="testimonial-title">Meet Client Satisfaction by using product</h2>
                    </div>
                    <Carousel>
                        <Carousel.Item>
                                <div className="testimonial-card">  
                            <ul>
                                <li><i className="fa fa-star"> </i> </li>
                                <li><i className="fa fa-star"> </i> </li>
                                <li><i className="fa fa-star"> </i> </li>
                                <li><i className="fa fa-star"> </i> </li>
                                <li><i className="fa fa-star"> </i> </li>                   
                            </ul>
                            <div className="card-body">
                                <h3 className="testimonial-card-title">User friendly & Customizable</h3>
                                <p>I switched to Payment Oasis for both my locations. The transition was really easy and they were able to save us money while doing so.</p>
                                <p> <span>May 12, 2018</span> </p>
                                <div className="card-bottom">
                                <div className="left">
                                    <img src={author} alt=""/>
                                </div>
                                <div className="right">
                                    <span> RIZ ALAMEN</span> <p>ECOMMERCE WEBSITE</p>
                                </div>
                                </div>                
                            </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                                <div className="testimonial-card">
                            <ul>
                                <li><i className="fa fa-star"> </i> </li>
                                <li><i className="fa fa-star"> </i> </li>
                                <li><i className="fa fa-star"> </i> </li>
                                <li><i className="fa fa-star"> </i> </li>
                                <li><i className="fa fa-star"> </i> </li>                   
                            </ul>
                            <div className="card-body">
                                <h3 className="testimonial-card-title">User friendly & Customizable</h3>
                                <p>I switched to Payment Oasis for both my locations. The transition was really easy and they were able to save us money while doing so.</p>
                                <p> <span>May 12, 2018</span> </p>
                                <div className="card-bottom">
                                <div className="left">
                                    <img src={author} alt=""/>
                                </div>
                                <div className="right">
                                    <span> RIZ ALAMEN</span> <p>ECOMMERCE WEBSITE</p>
                                </div>
                                </div>                
                            </div>
                            </div>
                        </Carousel.Item>                       
                        </Carousel>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-6 p-0">
                    <div className="request-section-inner">
                        <h3 className="title"> Request a Free Savings Analysis</h3>
                        <p>Learn about our simple subscription priced merchant best in class customer service, and industry-leading technology. In just a few minutes, we’ll help you understand your current statements and tell you how much you could save.</p>
                        <button type="button" className="slide-btn-2">Learn More </button>
                    </div>
                    </div>
                    <div className="col-md-6 p-0">
                    <div className="request-img-section">
                        <figure><img src={Intro_Pic}alt=""/></figure>
                    </div>
                    </div>
                </div>
            </div>
                {/* THis is For Check TAbs */}  
                <div className="home_tabs_outer">
            <div className="container-lg">
                <div className="row p-0">
                <div className="col-md-3 col-sm-6 m-0 p-0">    
                <button id="Home-btn"  className="tablink " onClick={()=>{openPage('Home')}}>Evm Terminal</button>      
                </div>
                <div className="col-md-3 col-sm-6 m-0 p-0">
                <button id="News-btn" className="tablink" onClick={()=>{openPage('News')}}>Virtual Terminal</button>
                </div>
                <div className="col-md-3 col-sm-6 m-0 p-0">
                <button id="Contact-btn" className="tablink" onClick={()=>{openPage('Contact')}}>Shopping Cart</button>
                </div>
                <div className="col-md-3 col-sm-6 m-0 p-0">
                <button id="About-btn" className="tablink" onClick={()=>{openPage('About')}}>Mobile Payment</button>
                </div>    
                </div>                
                <div className="row payment-top-padding">
                <div className="col-md-6">
                <div className="payment-image-content">
                <img src={Solution} alt=""/>
                </div>        
                </div>
                <div className="col-md-6 p-0">
                    <div id="Home" className="tabcontent">
                    <h3>EMV Terminal</h3>
                    <p>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam</p>
                    <button className="slide-btn-2">LEARN MORE</button>
                    </div>
                    
                    <div id="News" className="tabcontent News-btn">
                    <h3>Virtual Terminal</h3>
                    <p>natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam</p> 
                    <button className="slide-btn-2">LEARN MORE</button>
                    </div>
                    
                    <div id="About" className="tabcontent">
                    <h3>Mobile Payment</h3>
                    <p> accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam</p>
                    <button className="slide-btn-2">LEARN MORE</button>
                    </div>      
                    
                    <div id="Contact" className="tabcontent">
                    <h3>Shopping Cart</h3>
                    <p> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam</p>
                    <button className="slide-btn-2">LEARN MORE</button>
                    </div>
                </div>  
                </div>
            </div>  
            </div>
            {/* This is for Check Tabs End */}
            <div className="service-container">
                <div className="container-lg">
                <div className="row">
                    <div className="col-12">
                    <div className="service-title">
                    <h3>How Will Paymentoasis Save Me Money?</h3>
                    <p>Learn about the Payment Oasis Advantage</p>
                    </div>
                    </div>
                    <div className="col-12 p-0">
                    <div className="service-top">
                        <img src={Service_top} alt=""/>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="card">
                        <figure><img src={service_1} alt=""/></figure>
                        <div className="card-body">
                        <h5 className="card-title">No Contracts</h5>
                        <p className="card-text"> Get your account ready to process within 1-2 business days</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="card">
                        <figure><img src={service_2} alt=""/></figure>
                        <div className="card-body">
                        <h5 className="card-title">Direct Cost Pricing</h5>
                        <p className="card-text">Call and talk to us about your needs. There is no obligation to sign-up.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="card">
                        <figure><img src={service_3} alt=""/></figure>
                        <div className="card-body">
                        <h5 className="card-title">Easy Integration</h5>
                        <p className="card-text">We have one of the highest approval rates at 99%, helping you save time and money.</p>
                        </div>
                    </div>
                    </div>  
                </div>                
                </div>
            </div>
            <div className="slider-outer">
            <div className="container-xl">            
                <div className="row ">
                    <div className="col-12"  >
                    <h1>Solutions for all Industries</h1>
                    <div className="col-md-12">
                        <Cardslider/>
                    </div>
                    </div>       
                </div>                
            </div>
            </div>
            <div className="Merchant-outer">
            <div className="container-lg ">
                <div className="row">
                <div className="col-md-6">
                    <div className="merchant-difference">
                    <h3>The Merchant Difference</h3>
                    <ul>
                        <li><i className="fa fa-check"></i> Thousands Of Dollars In Savings</li>
                        <li><i className="fa fa-check"></i> InnovativeTechnology</li>
                        <li><i className="fa fa-check"></i> Dedicated ToCustomer Support</li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="sign-up-form">
                    <form action="">
                        <h5>Sign up. Start Saving</h5>
                        <input type="text" placeholder="First Name"/>
                        <input type="email" placeholder="Email Address"/>
                        <input type="text" placeholder="Phone"/>
                        <input type="text" placeholder="Business"/>
                        <button>get started</button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>        
    )
}

export default Home;