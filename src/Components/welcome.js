import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'
import Zoom from 'react-reveal/Zoom';   
import './components.css';
configureAnchors({offset: -120, scrollDuration: 200})

export default class Welcome extends React.Component{
    render(){
        return(     
                 <center>  
                     <ScrollableAnchor  id={"welcome"}>  
                     <div>
                         </div>
                 </ ScrollableAnchor>
            <div className={"col-lg-10"} style={{backgroundColor:'rgb(0,0,0,0)',color:'black',borderRadius:'5px',padding:'20px'}}>
                <div className="welcomeheadingdivup">
                    <Zoom>
                <h1 className="welcomeheading dcursor">WELCOME TO CODINGTIER
                    </h1> </Zoom> </div>
                    <Zoom big>
                    <p id="welcometext" className="dcursor hvr-grow-welcometext" >
                    Coding Tier  is the name of excellence that leads you to a path of perfectness and ensure 
                    you the quality product. Coding Tier is a group of professional bunch urging to serve people 
                    by their utmost skills. Our professional skills and desire for the satisfaction of our clients
                     brings the product to a high level. We endeavour to serve our client with the best of best
                      without compromising their requirements. Coding Tier offers top-notch services in web designing, 
                      web development, graphic design, Android application, desktop application, and mobile application development, hardware embedded systems, domain and web hosting to say the least.
                      We also provide great consultancy to our clients regardless of any biasness.
                        Do <a href="#contact" className="deflink" >Contact us</a> for the best ever creative and innovative work which are likable and appreciable
                        </p>
                        </Zoom>
                        <div className="welcomeheadingdivdown">
                            
                        <Zoom>   <h1 className="welcomeheading dcursor" >RESHAPING YOUR IDEAS
                    </h1>
                    </Zoom>
                     </div>
                  
                </div>
                </center>
                 )
    }
}
