import React from "react";
// import "./slider-style.css"
import "./Css/home-style.css";
import "./Css/home-responsive-style.css";
import {MdChevronLeft, MdChevronRight } from 'react-icons/md'; 
import Intur_1 from "./Images/indus-1.jpg";
import Intur_2 from "./Images/indus-2.jpg";
import Intur_3 from "./Images/indus-3.jpg";
import Intur_4 from "./Images/indus-4.jpg";

const Cardslider=()=>{
    const slides = 
    [
        {Image:Intur_1 , title: ` Food & Beverage` , title_2 :` Payment Solutions `  },
        {Image:Intur_2 , title: `Retail Payment `, title_2 : `  Solution `  },
        {Image:Intur_3 , title: `Legal & Professional` ,  title_2: `Payment Solution`  },
        {Image:Intur_4 , title: `Hotel & Lodging ` , title_2: `Payment Solution`  },
        {Image:Intur_2 , title: `Hotel & Lodging ` , title_2: `Payment Solution`  },
        {Image:Intur_1 , title: ` Food & Beverage` , title_2 :` Payment Solutions `  },
        {Image:Intur_2 , title: `Retail Payment `, title_2 : `  Solution `  },
        {Image:Intur_3 , title: `Legal & Professional` ,  title_2: `Payment Solution`  },
    ];  
    const slideleft=()=>{
        var slider= document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 270;        
         

        // if((Window<="480px") ||(Window>="470px"))  {  
        //     slider.scrollBy(-416,0);
        // }else if((Window<="469") || (Window>="460px") ){
        //     slider.scrollBy(-10,0); 
           
        // }

        
        // setTimeout(() => {
        //   }, 0);

    }
    const slideright=()=>{
        var slider= document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 270 ;
    }

    return(
        <>
        <div id="main-slider-container">
        <MdChevronLeft className="slider-icon left" onClick={()=>{slideleft()}}/>
        <div id="slider">
            { 
                slides.map((slide,Index)=>{
                    return(
                        <div className="slider-card" key={Index}>
                            <div className="slider-card-images" style={{backgroundImage: `url(${slide.Image})`}  }>
                            <div className="slider-card-body">
                            <h4 className="slider-card-title">{slide.title}</h4>           
                            <h4 className="slider-card-title">{slide.title_2}</h4> 
                            </div>  
                            </div>         
                                  
                        </div>
                    )
                })  
            }

        </div>
        <MdChevronRight className="slider-icon right" onClick={()=>{slideright()}}/>


        </div>
        
        </>
    )


}

export default Cardslider;  