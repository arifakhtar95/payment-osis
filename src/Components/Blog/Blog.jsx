import React from "react";
import "./Css/blog-style.css"
import  Image_1 from "./Images/Design-Minimalism_03.jpg" ;
import  Image_2 from "./Images/Design-Minimalism-2_03.jpg"; 
import  Image_3 from "./Images/Design-Minimalism-3_03.jpg" ;



const  Blog=()=>{
    const bloglistdata = [ 
        { img : Image_1 , title : "Design Minimalism" , text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", button : "Read More" },
        { img : Image_2 , title : "Design Minimalism" , text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", button : "Read More" },
        { img : Image_3 , title : "Design Minimalism" , text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", button : "Read More" },
        { img : Image_1 , title : "Design Minimalism" , text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", button : "Read More" },
        { img : Image_2 , title : "Design Minimalism" , text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", button : "Read More" },
        { img : Image_3 , title : "Design Minimalism" , text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", button : "Read More" },
        { img : Image_1 , title : "Design Minimalism" , text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", button : "Read More" },
        { img : Image_2 , title : "Design Minimalism" , text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", button : "Read More" },
        { img : Image_3 , title : "Design Minimalism" , text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", button : "Read More" },
    ]

    return(
        <>
           <div className="about-us-banner">
                <div className="about-us-banner-title">
                    <h4>Blog</h4>
                </div>
            </div>


            <div className="blog-card-outer">
                <div className="container-lg">
                   <div className="row">
                    { bloglistdata.map((blogdata, index)=>{
                        return(
                            <div className="col-md-4 col-sm-6 p-0" key={index} >
                               <div className="card"> 
                                <img src={blogdata.img} alt="" />
                                <div className="card-body"> 
                                    <h5 className="card-title">{blogdata.title}</h5>
                                    <p className="card-text">{blogdata.text}</p>
                                    <button className="btn"> {blogdata.button} </button>                                    
                                </div>
                               </div>
                            </div>
                        )
                    })                        
                    }                    
                    </div> 
                </div>
            </div>
        </>
    )
}
export default Blog;


