import React, { Component } from 'react';
import './components.css';
import Logo from '../images/logo-circle.png';
import Menuimg from '../images/navmenu.png';
import Menuhoverimg from '../images/navmenuhover.png';
import { reveal as Menu } from 'react-burger-menu'
import Homelogo from '../images/footerlogo.png';
import Aboutus from '../images/aboutus.png';
import Services from '../images/services.png';
import Technology from '../images/technology.png';
import Contact from '../images/contact.png';
import CustomDivider from '../sidehelper/divider'

var sepOpen=false;


class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.navclick=this.navclick.bind(this);
       this.hasopen=this.hasopen.bind(this);
       this.isMenuOpen=this.isMenuOpen.bind(this);
        this.state={isOpen:false};
    }
    navclick(e){
        if(sepOpen==true)
        {this.hasopen();}
        if(this.props.history.location.pathname!=='/')
        this.props.history.replace('/#'+e.currentTarget.id, null);
        else window.location.href='./#'+e.currentTarget.id;
        
                }

hasopen(){
    sepOpen=!sepOpen;
    this.setState({...this.state,isOpen:!this.state.isOpen});
  

if(sepOpen){
    document.getElementById("newnavbar").style.transition="width ease-in 1s"
    document.getElementById("newnavbar").style.width="300px";
    document.getElementById("newnavbar").style.height="85px";
    document.getElementById("navbarheading").style.opacity="0";
}
else  {
    document.getElementById("newnavbar").style.transition="width 0s,left ease-in 0.4s";
    document.getElementById("navbarheading").style.opacity="1";
    document.getElementById("newnavbar").style.left="-100vw";
    document.getElementById("newnavbar").style.width="100%";
    
    setTimeout(
        function() {
            document.getElementById("newnavbar").style.transition="width 1s,left ease-out 0.6s";
            
            document.getElementById("newnavbar").style.left="0px";
                 }
        ,600 );
        }
    }

         isMenuOpen = function(state) {
            if(sepOpen!=state.isOpen){
              this.hasopen();
            }
          };



           
    render() { 
        return ( 
            <div id="outer">

                <Menu  
isOpen={this.state.isOpen}
id={ "sidebar" }
className={"mymenu"}
 customBurgerIcon={false} 
 pageWrapId={ "page-wrap" }
 outerContainerId={"outer"}
 onStateChange={this.isMenuOpen }
 
 >
       <span onClick={this.navclick} id="home"  textDecoration="none"  className=" nav-menu-item"   >
        <img src={Homelogo} alt="Home" style={{paddingRight:'5vh'}}/> &nbsp; Home
        
       </span>
       
       <span onClick={this.navclick} id="welcome"   className="nav-menu-item" >
        <img src={Aboutus} alt="About" style={{paddingRight:'5vh'}}/> &nbsp;About
        
       </span>
   
       <span onClick={this.navclick} id="service"   className="nav-menu-item" >
        <img src={Services} alt="Services" style={{paddingRight:'4vh'}}/> &nbsp;  Services
      
       </span>
       
       <span onClick={this.navclick} id="technologies"   className="nav-menu-item" >
        <img src={Technology} alt="Technology" style={{paddingRight:'4vh'}}/> &nbsp;Technologies
       
       </span>
       
       <span onClick={this.navclick} id="contact" className="nav-menu-item" >
        <img src={Contact} alt="Contact" style={{paddingRight:'4vh'}}/> &nbsp;   Contact
        
       </span>
       
</Menu>
<div className="row no-gutters newnavbar"  id="newnavbar">

<div className="col-2 col-sm-2 col-md-2 d-block d-sm-block d-md-block d-lg-none d-xl-none"  >
 <img src={Menuimg} style={{paddingLeft:'2vw',marginTop:"10px"}} onClick={this.hasopen}/>

</div>

<div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 navbarlogo pointer" onClick={()=>window.location.href = 'https://www.CodingTier.com'}>
<img src={Logo} alt="Logo" style={{width:'64px',height:'64px'}}/>
</div>

<div   className="col-7 col-sm-6 col-md-6 col-lg-4 col-xl-2 navbarheading pointer" id="navbarheading" onClick={()=>window.location.href = 'https://www.CodingTier.com'}>
CODING TIER
</div>


<div className="d-none d-sm-none d-md-none d-lg-block d-xl-block  col-lg-6 offset-xl-3 col-xl-4 " style={{}} >

                 <div  className=" outernaver hvr-underline-from-center navcolor" >
                  <div  id='home' className="navmystyle"  onClick={ this.navclick }>
                   <span  style={{textDecoration:'none'}}  className="navlinkfont" >Home</span>
                  </div>
                 </div>

                  <div className=" outernaver hvr-underline-from-center navcolor" > 
                   <div  id='welcome' className="navmystyle " onClick={this.navclick }>
                    <span   style={{textDecoration:'none'}}  className="navlinkfont " >About </span>
                   </div>
                  </div>

                  <div  className="outernaver hvr-underline-from-center navcolor">
                   <div   id='service' className="navmystyle" onClick={this.navclick} >
                    <span  style={{textDecoration:'none'}}   className="navlinkfont"   > Services</span>
                   </div>  
                  </div>


                <div  className="outernaver hvr-underline-from-center navcolor">
                 <div  id='technologies' className="navmystyle" onClick={this.navclick}>
                  <span style={{textDecoration:'none'}} className="navlinkfont">Technologies</span>
                 </div>  
                </div>


                  <div  className="outernaver hvr-underline-from-center navcolor">
                   <div id='contact' className="navmystyle" onClick={this.navclick} >
                    <span  style={{textDecoration:'none'}}   className="navlinkfont" >Contact</span>
                   </div>
                  </div>   



</div>


</div>
</div>


         );
    }
}
 
export default Navbar ;