import React from "react";
import "./Css/atm-style.css"
import "./Css/atm-responsive-style.css"
import Free_Placement_03 from "./Images/Free-Placement_03.jpg"
import ATM_Leasing_Events_07 from "./Images/ATM-Leasing--Events_07.png"
import Our_Guarantee_07 from "./Images/Our-Guarantee_07.png"
import Bitcoin_ATM_10 from "./Images/Bitcoin-ATM_10.png"


const Atm=()=>{
    return(
        <>
            <div className="about-us-banner">
            <div className="about-us-banner-title">
                <h4>ATM Solutions</h4>
            </div>
        </div>

        <div className="atm-section-1-outer" >
        <div className="container-lg">
            <div className="row">
                <div className="col-md-5">
                    <div className="atm-image-section">
                        <img src={Free_Placement_03} alt=""/>
                    </div>
                </div>
                <div className="col-md-5 offset-md-1">
                    <div className="text-box">
                        <h4>Free Placement Program</h4>
                        <p>perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <button>Learn More </button>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
    <div className="atm-section-2-outer">
        <div className="container-lg">
            <div className="row">
                <div className="col-md-5">
                    <div className="text-box">
                        <h4>ATM Leasing / Events</h4>
                        <p>perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="col-md-5 offset-md-1">
                    <div className="atm-image-section">
                        <img src={ATM_Leasing_Events_07} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="atm-section-3-outer">
        <div className="container-lg">
            <div className="row">
                <div className="col-md-5">
                    <div className="atm-image-section">
                        <img src={Our_Guarantee_07} alt=""/>
                    </div>                    
                </div>
                <div className="col-md-5 offset-md-1">
                    <div className="text-box">
                        <h4>Our Guarantee</h4>
                        <p>perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="atm-section-4-outer">
        <div className="container-lg">
            <div className="row">
                <div className="col-md-5">
                    <div className="text-box">
                        <h4>Bitcoin ATM</h4>
                        <p>perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="col-md-5 offset-md-1">
                    <div className="atm-image-section">
                        <img src={Bitcoin_ATM_10} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>         

        </>
    )
}
export default Atm;