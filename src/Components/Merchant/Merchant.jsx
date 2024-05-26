import React from "react";
import "./Css/merchant.css"
import How_it_work_06 from "./Images/How-it-work_06.jpg"
import  Our_Guarantee_07 from "./Images/Our-Guarantee_07.png"
import Interchange_Rates_14 from "./Images/Interchange-Rates_14.png"

const Merchant=()=>{
    return(
        <>

        <div className="about-us-banner">
            <div className="about-us-banner-title">
                <h4>Merchant Solution</h4>
            </div>
        </div>
                
            <div className="merchant-section-one-outer">
                <div className="merchant-section-inner">
                    <h4>Select Your Plan</h4>
                    <p>Choose the plan that's right for you
                    <span>Or call a specialist to help you find the best option</span>            
                    </p>            
                </div>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-9 col-11 mx-md-0  mx-auto ">
                            <div className="card">
                                <h3>Premium Plan</h3>
                                <h1>$99<span>/ month</span> </h1>
                                <p>+ $0.03 per transaction</p>
                                <p>+ interchange & direct cost</p>                        
                                <ul>
                                    <li>Process up to $30.000/mo</li>
                                    <li>Cost to Cost on all other fees</li>
                                    <li>No Contract</li>
                                    <li>No PCI Fees</li>
                                    <li>No Cancellation Fees</li>
                                    <li>24/7 Customer Support</li>
                                    <li>Unique Solutions</li>     
                                    <li>&nbsp;</li>                       
                                </ul>
                                <button>Get Started</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-9 col-11 mx-md-0  mx-auto">
                            <div className="card">
                                <h3>Premium Plan</h3>
                                <h1>$149<span>/ month</span> </h1>
                                <p>+ $0.03 per transaction</p>
                                <p>+ interchange & direct cost</p>                        
                                <ul>
                                    <li>Unlimited Processing</li>
                                    <li>Cost to Cost on all other fees</li>
                                    <li>No Contract</li>
                                    <li>No PCI Fees</li>
                                    <li>No Cancellation Fees</li>
                                    <li>24/7 Customer Support</li>
                                    <li>Unique Solutions</li>     
                                    <li>Free Equipment</li>                       
                                </ul>
                                <button>Get Started</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-9 col-11 mx-md-0  mx-auto">
                            <div className="card">
                                <h3>Premium Plan</h3>
                                <h1>$149<span>/ month</span> </h1>
                                <p>+ $0.03 per transaction</p>
                                <p>+ interchange & direct cost</p>                        
                                <ul>
                                    <li>Process up to $30.000/mo</li>
                                    <li>Cost to Cost on all other fees</li>
                                    <li>No Contract</li>
                                    <li>No PCI Fees</li>
                                    <li>No Cancellation Fees</li>
                                    <li>24/7 Customer Support</li>
                                    <li>Unique Solutions</li>     
                                    <li>Free Equipment</li>                       
                                </ul>
                                <button>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="merchant-section-two-outer">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-6 col-sm-9 col-11 mx-md-0  mx-auto">
                        <div className="image-section">
                            <img src={How_it_work_06} alt=""/>
                        </div>
                        </div>
                        <div className="col-md-6 col-sm-9 col-11 mx-md-0  mx-auto">
                            <div className="text-section">
                                <h4>How It works</h4>
                                <ul>
                                    <li>   Thousands Of Dollars In Savings</li>
                                    <li>InnovativeTechnology</li>
                                    <li>Dedicated ToCustomer Support</li>
                                </ul>
                                <p>perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qu</p>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="merchant-section-three-outer">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-6 col-sm-9 col-11 mx-md-0  mx-auto">
                            <div className="text-section">
                                <h4>Our Guarantee</h4>
                                <p>perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.</p>
                                <button>Read More</button>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-9 col-11 mx-md-0  mx-auto">
                            <div className="image-section">
                                <img src={Our_Guarantee_07} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="merchant-section-four-outer">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-6 col-sm-9 col-11 mx-md-0  mx-auto">
                            <div className="image-section">
                                <img src={Interchange_Rates_14} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-9 col-11 mx-md-0  mx-auto">
                            <div className="text-section">
                                <h4>Interchange Rates</h4>
                                <p>perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.</p>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
        </>
    )
}
export default Merchant;

