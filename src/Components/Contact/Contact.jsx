import React from "react";
import "./Css/contact-style.css"
import "./Css/responsive.css"
import Find_us_03 from "./Images/Find-us_03.png"
import Call_us_03 from "./Images/Call-us_03.png"
import Send_a_Fax_03 from "./Images/Send-a-Fax_03.png"

const Contact=()=>{
    return(
        <>
            <div className="contact-section-1-outer">
                <div className="inner-section">
                    <h4>Contact The Payment Oasis Team</h4>
                <p> <b>Looking for a payments provider?</b>  Fill out the form for more <span>Info <b>Current customer?</b>  Access the knowledgebase,</span>  log into your account or contact support.</p>
                </div>
            </div>

            <div className="contact-section-2-outer">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-6 mx-md-0 mx-auto col-sm-10 col-11 ">
                            <div className="card-section">
                                <div className="row p-0">
                                    <div className="col-3 p-0">
                                        <img src={Find_us_03} alt=""/>
                                    </div>
                                    <div className="col-8 p-0">
                                        <h4>Find Us :
                                        <span>618 e south st suit #510 orlando FL 3280</span>
                                        </h4>
                                    </div>
                                </div>                    
                            </div>
                            <div className="card-section">
                                <div className="row p-0">
                                    <div className="col-3 p-0">
                                        <img src={Call_us_03} alt=""/>
                                    </div>
                                    <div className="col-8 p-0">
                                        <h4>Call Us :
                                        <span>407-982-1082</span>
                                        </h4>
                                    </div>
                                </div>                    
                            </div>
                            <div className="card-section">
                                <div className="row p-0">
                                    <div className="col-3 p-0">
                                        <img src={Send_a_Fax_03} alt=""/>
                                    </div>
                                    <div className="col-8 p-0">
                                        <h4>Fax Us :
                                        <span>407-982-1082</span>
                                        </h4>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                        <div className="col-md-6 mx-md-0 mx-auto col-sm-10 col-11 ">
                            <div className="form-section">
                                <h4>Want to learn more about Payment Oasis</h4>
                                <form action="">
                                    <div className="row">
                                        <div className="col-sm-6 form-inner-padding ">
                                            <label for="location_name">Location Name</label> <input type="text" id="location_name" placeholder="1234 Main St"/>                       
                                        </div>
                                        <div className="col-sm-6 form-inner-padding">
                                            <label for="inputAddress2">Your Name</label> <input type="text" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                        </div>
                                        <div className="col-sm-6 form-inner-padding">
                                            <label for="city-state">Location City and State</label> <input type="text" id="city-state" placeholder="City"/>                       
                                        </div>
                                        <div className="col-sm-6 form-inner-padding">
                                            <label for="">&nbsp;</label> <input type="text" id="city-state" placeholder="State"/>
                                        </div>
                                        <div className="col-sm-6 form-inner-padding">
                                            <label>Do you already </label>                                
                                            <select>
                                                <option value="">Choose</option>
                                                <option value="">...</option>
                                            </select>                            
                                        </div>

                                        <div className="col-sm-6 form-inner-padding">
                                            <label>Do you already </label>                                
                                            <select>
                                                <option value="">Choose</option>
                                                <option value="">...</option>
                                            </select>
                                        </div>
                                        <div className="col-12 form-inner-padding">
                                            <label for="location_name">Website</label> <input type="text" id="location_name" placeholder=""/>                       
                                        </div>  
                                    </div>
                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </>
    )
}
export default Contact;


