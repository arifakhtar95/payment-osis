import React from "react";
import "./Css/about-style.css";
import About_img_1 from "./Images/about-img-1.jpg"
import About_img_2 from "./Images/about-img-2.jpg"
import About_img_3 from "./Images/about-img-3.jpg"
import Dani_counts from "./Images/dani-counts.jpg"

const About=()=>{
    const data = [
        {Image : Dani_counts , title:" Dani Counts" , title_2:" Advisor " },
        {Image : Dani_counts , title:" Dani Counts" , title_2:" Advisor " },
        {Image : Dani_counts , title:" Dani Counts" , title_2:" Advisor " },
        {Image : Dani_counts , title:" Dani Counts" , title_2:" Advisor " },
    ];
    return(
        <>
        {/* About Page  Section 1 Start */}
        <div className="about-us-banner">
            <div className="about-us-banner-title">
                <h4>About Us</h4>
            </div>
        </div>
        {/* About Page Section 1 End */}
        
        {/* About Page Section 2 Start   AboutUs Image & Paragraph */}
        <div className="about-section-2-outer">
        <div className="container-lg">
            <div className="row">
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-5 p-0">
                    <div className="about-us-image-section">
                       <img src={About_img_1} alt="" />
                    </div>
                </div>
                <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-7 p-0">
                    <div className="about-us-text-section">
                        <h4>About Us</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
                        <p>sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi</p>
                        <p>consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem .</p>
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        {/* About Pagee Section 2 End     AboutUs Image & Paragraph */}

        {/* About Page Section 3 Start   Our Teams */}
        <div className="ourteam-outer">
        <div className="container-lg">
            <div className="row">
                <div className="col-md-7 p-0">
                <div className="our-team-text">
                    <h4>Our Team</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                </div>
                </div>
            </div>        
        </div>
        </div>
        <div className="our-team-card-outer">
        <div className="container-lg">
            <div className="row ">
                {
                    data.map((data)=>{
                    return(
                        <div className="col-md-3 p-0" key={data}>
                          <div className="our-team-card">
                            <img src={data.Image} alt="" />                        
                        <div className="our-team-card-body">
                            <h5>{data.title}</h5>
                            <span>{data.title_2}</span>
                        <ul>
                            <li><i className="fa fa-facebook icon social-icon"></i></li>
                            <li><i className="fa fa-twitter icon social-icon"></i></li>
                            <li><i className="fa fa-instagram icon social-icon"></i></li>
                        </ul>
                        </div>
                        </div>  
                        </div>
                    )                  
                    })
                }
            </div>
        </div>
        </div>
        {/* About Page Section 3 End   Our Teams */}

        {/* About Page Section 4 Start  Text And Image  */}
        <div className="text-and-image-outer">
            <div className="container-lg ">
                <div className="row">
                <div className="col-md-6 p-0 ">
                    <div className="text-box">
                        <p>Payment Oasis is texas’s fastest-growing payment technology company. We’re a fast-paced company and are committed to exceeding expectations with “the best damn experience” in every way. Want to join our amazing team? Check out our current openings:</p>
                        <button>Careers at Payment Oasis</button>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <img src={About_img_2} alt="" />
                </div>

                <div className="col-md-6 p-0">
                     <img src={About_img_3} alt="" />
                </div>
                <div className="col-md-6 p-0">
                    <div className="text-box">
                        <p>Ready to switch to a better payment processor? Request a demo to see how our services will work for your business. Or, begin your application to get access to our leading payment processing technology and advanced cloud analytics.</p>
                        <button>Get a Free Analysis</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        {/* About Page Section 4 End Text And Image */}

        {/*  About Page Section 5 Start  The Merchant Difference  */}

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
            {/*  About Page Section 5 End  The Merchant Difference  */}      
        </>
    )
}
export default About;