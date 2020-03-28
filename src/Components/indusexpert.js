import React,{Component} from 'react';
import Zoom from 'react-reveal/Zoom';


import Paper from '../../src/images/IndustryImages/paper.jpg';
import Finance from '../../src/images/IndustryImages/finance1.png';
import Ecommerce from '../../src/images/IndustryImages/ecommerce.png';
import Branding from '../../src/images/IndustryImages/branding.jpg';
import Food from '../../src/images/IndustryImages/food.jpg';


import './components.css'
class INEXP extends Component{
 

    render(){
    
    return(<div className="indusdivup">
    
    <div className="indusdivdown">
    </div>
    <br/>
    
    <div className="heading">
    <Zoom>
    <h1  className="homeheadingtext">OUR<br/> INDUSTRY EXPERTISE</h1>
    </Zoom>
    
    </div>
    <br/>
    
    <div className="expertisecom ">

    
    
    <div className="imagediv hvr-grow pointer"> <Zoom ><img alt="Paper Industry" src={Paper}  ></img> <span className="caption">PAPER INDUSTRY</span></Zoom></div>
    <div className="imagediv hvr-grow pointer"> <Zoom><img  alt="Branding" src={Branding}     ></img> <span className="caption">BRANDING      </span></Zoom></div>
    <div className="imagediv hvr-grow pointer"> <Zoom><img  alt="Finance" src={Finance}       ></img> <span className="caption">FINANCE       </span></Zoom></div>
    <div className="imagediv hvr-grow pointer"> <Zoom ><img alt="E-Commerce" src={Ecommerce}  ></img> <span className="caption">E-COMMERCE    </span></Zoom></div> 
    <div className="imagediv hvr-grow pointer"> <Zoom><img  alt="Food" src={Food}             ></img> <span className="caption">FOOD CHAIN    </span></Zoom></div>
    
    </div>
     
    
    </div>
    
    );}}
    
    export default INEXP;