import React,{Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Logo from '../images/footerlogo.png';
import CustomDivider from '../sidehelper/divider';
import Google from './socialicons/g1.png';
import Facebook from "./socialicons/facebook1.png";
import Twitter from './socialicons/twitter1.png';
import Linkedin from './socialicons/linkedin.png';
import './components.css';
class Footer extends Component{

    render(){
     
        return(

        <div  className="container-fluid" style={{backgroundColor:'rgb(236, 234, 234)'}}>
        
{/* scrolling effect start*/}
<ScrollableAnchor id={'footer'} >
<div>
    </div>
</ScrollableAnchor>
{/* scrolling effect ends*/}

{/* FOOTER ROW STARTED */}
<div   className="row no-gutters" style={{zIndex:1,paddingTop:'30px',paddingBottom:'0px',paddingLeft:'2%'}}>
{/* FOOTER LOGO STARTED*/}
<div    className=" col-12 col-xl-6 " style={{zIndex:2}} >
<br/>
<div style={{textAlign:'left'}}>
<span id="logotextstyle">
<img src={Logo} style={{marginLeft:'0%'}} alt="LOGO"/>
&nbsp; CODING TIER </span>

</div>

       <div className="footertextclass" ><br/>We empower your Business through our ingenious technological solutions, and support from our remarkable teams.</div>
</div>
{/* FOOTER LOGO ENDED*/}

{/* FOOTER SIDE COLUMNS STARTED*/}
<div className=" col-12 col-xl-6 " style={{zIndex:1,marginTop:'20px'}} >

<div className="row no-gutters" style={{ zIndex:1 }} >
{//<div className=" col-0 col-md-4 col-sm-4  col-xl-4 col-lg-4" style={{zIndex:1}} ></div>
}
<div className=" col-5   col-xl-4 " style={{zIndex:1}} >
<div className="footerheadingclass">COMPANY</div>
<div className="footertextclass2">
<br/><a href="/">About us </a> <br/>
<a href='/'>Why us</a>
</div></div>




<div className=" col-6  col-xl-4 " style={{zIndex:1}} >

<div className="footerheadingclass" style={{textAlign:'center'}}>SOCIAL</div>
<div className="footertextclass2" style={{textAlign:'center'}}>
<br/>

<span className="hvr-pulse-grow marginLeft paddingBottom">
<a href="http://www.facebook.com/CodingTier" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="facebook"/></a>
</span>

<span className="hvr-pulse-grow marginLeft paddingBottom">
<a href="https://plus.google.com/u/2/115025868080186829413" target="_blank" rel="noopener noreferrer"><img src={Google} alt="google"/></a>
</span>

<span className="hvr-pulse-grow marginLeft paddingBottom">
<a href="https://twitter.com/codingtier" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="twitter"/></a>
</span>

<span className="hvr-pulse-grow marginLeft  paddingBottom ">
<a href="https://pk.linkedin.com/in/coding-tier-52228b172" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="linkedin"/></a>
</span>


</div>
</div>

</div>


</div>
{/* FOOTER SIDE COLUMNS ENDED*/}



</div>
{/* FOOTER ROW ENDED*/}



<CustomDivider/>

{/* COPYRIGHT ROW STARTED*/}
<div className="row" style={{backgroundColor:'rgb(236, 234, 234)',zIndex:1,paddingLeft:'6%'}}>

<div className="footercopyright col-12 col-md-12 col-sm-12  col-xl-12 col-lg-12" style={{zIndex:1}} >
&copy; 2018-19 CODING TIER (SOFTWARE HOUSE KARACHI , PAKISTAN)<br/>
<p id="tandc">TERMS AND CONDITIONS PRIVACY POLICY</p>
</div>

</div>
{/* COPYRIGHT ROW ENDED*/}



        </div>
        );
    }
}


export default Footer;