

import React from 'react';
import Database from '../images/database.png';
import Website from '../images/website.png';
import ScrollableAnchor from 'react-scrollable-anchor';
import MobileApp from '../images/mobileapp.png';
import Graphic  from '../images/graphicdesign.png';
import Microservice from '../images/microservice.png';
import Desktop from '../images/desktop.png';
import Debug from '../images/debug.png';
import Webdesign from  '../images/webdesigning.png';

import Zoom from 'react-reveal/Zoom';

import './components.css';

import Button from '@material-ui/core/Button';


  
    
class Services extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
         
          
        };
        this.click=this.click.bind(this);
      }

      click = e =>{
  window.scrollTo(0, 0)
this.props.history.push('./services/'+e.currentTarget.id); 
  }
 
    render(){
return(	  
<div id="serviceparallax">
<center>
<ScrollableAnchor id={'service'} >
<div>
    </div>
</ScrollableAnchor>
<br/>
<center className="whatwedo" onClick= {this.click} id=''>
    <Zoom>
   <h1 className="homeheadingtext">OUR SERVICES</h1>
   </Zoom>
   </center>
   <br/>
   <div className={"col-lg-10"} style={{color:'#fff',borderRadius:'5px',zIndex:1}} >
  
            <div className="container" style={{zIndex:1}}>
         
            <div className="row" style={{zIndex:1}}>


            <Zoom big>
            <div className=" col-12 col-md-4 col-sm-6  col-xl-4 col-lg-4"style={{width:'10%',zIndex:2,marginBottom:'10px'}}  >
            <div className="cate" onClick= {this.click} id='da' >
            <div className={"services"} style={{width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'rgb(140,140,140)'}}>
            <img src={Desktop}  alt="Desktop Application"
             style={{paddingTop:'18px',paddingBottom:'18px'}}
             />

             </div>

             <p style={{fontWeight:'bold',padding:'5px'}}>DESKTOP APPLICATION
                 </p>
                <p style={{textAlign:'left'}}>
               Manage and Solve your Organaiztion problems on a single Forum. <br/>Data Entry, Analyze , Reveiw Result .
               <br/>Grow your Business with us.
       
 </p>  
 
 <Button style={{backgroundColor:'#d8d8d8',color:'#102a2a',borderRadius:'50px'}} onClick={()=>this._onButtonClick("desktop")} id="desktopbutton" >Read more</Button>
 <br/>   <br/>  
 </div>
        </div>
        </Zoom>    

 <Zoom big>
               <div className="  col-12 col-md-4 col-sm-6 col-xl-4 col-lg-4" style={{zIndex:1,marginBottom:'10px'}}>
               <div className=" cate" onClick= {this.click} id='dm'>
             
                <div style={{width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'rgb(140,140,140)' ,zIndex:1}}>
            <img src={Database} alt="Database Management"
					  
             style={{paddingTop:'18px',paddingBottom:'18px'}} />
             </div>
             <p style={{fontWeight:'bold',padding:'5px'}}>DATABASE MANAGEMENT
                 </p>
                <p style={{textAlign:'left',zIndex:1}}>
                
Can't handle the data or entangled in a complex dataset, no worry. <br/>Manage and Analyze your valuable and enormous data with us.
                    </p>
                   
               <Button style={{backgroundColor:'#d8d8d8',color:'#102a2a',borderRadius:'50px'}} onClick={()=>this._onButtonClick("database")} id="databasebutton" color="primary">Read more</Button>
              <br/> <br/>
                    </div>
                  
                      
                </div>
                </Zoom>

                <Zoom big>
                <div className=" col-12 col-md-4 col-sm-6 col-xl-4 col-lg-4" style={{marginBottom:'10px'}}>
                <div className=" cate" onClick= {this.click} id='debug'>
            <center>
           
            <div style={{width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'rgb(140,140,140)'}}>
            <img src={Debug} alt="DEBUGGING"
             style={{paddingTop:'18px',paddingBottom:'18px'}}
             />
             </div>
             <p style={{fontWeight:'bold',padding:'5px'}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DEBUGGING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</p>
                <p style={{textAlign:'left'}}>
                    Tired of doing repititive task daily , want to automate.<br/> Then Softonic is here 
                    for you. <br/> 
                THE HARDWARE TO AUTOMATE YOUR LIFE. 
                </p>
                
 <Button style={{backgroundColor:'#d8d8d8',color:'#102a2a',borderRadius:'50px'}} onClick={()=>this._onButtonClick("debugging")} id="debuggingbutton" color="primary">Read more</Button></center>
 <br/>             </div>

                </div> 
                </Zoom>

                <Zoom big>
                <div className=" col-12 col-md-4 col-sm-6 col-xl-4 col-lg-4" style={{marginBottom:'10px',zIndex:1,}}>
                <div className="cate" onClick= {this.click} id='gd'>
            <center>
          <div className={"services"} style={{width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'rgb(140,140,140)'}}>
            <img src={Graphic} alt="GRAPHIC DESIGNING"
             style={{paddingTop:'18px',paddingBottom:'18px'}}
             />
            </div>
            <p style={{fontWeight:'bold',padding:'5px'}}>GRAPHIC DESIGNING
                 </p>
                <p style={{textAlign:'left'}}>Want to animate your ideas , thought, <br/> Just Bring it on. Apart from designing , We also have experienced and creative consultants that envision your ideas in an ideal way.
                
</p>
 <Button style={{backgroundColor:'#d8d8d8',color:'#102a2a',borderRadius:'50px'}} onClick={()=>this._onButtonClick("graphic")} id="graphicbutton" color="primary">Read more</Button></center>
 <br/>              </div>
                </div>
            </Zoom>

            <Zoom big>
            <div className=" col-12 col-md-4 col-sm-6 col-xl-4 col-lg-4" style={{marginBottom:'10px'}}>
            <div className=" cate" onClick= {this.click} id='ma' >
           <center>
<div>
<div style={{width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'rgb(140,140,140)'}}>
            <img src={MobileApp} alt="MOBILE APPLICATION"
             style={{paddingTop:'18px',paddingBottom:'18px'}} />
            </div>
            </div>
            <p style={{fontWeight:'bold',padding:'5px'}}>MOBILE APPLICATION
                 </p>
                <p style={{textAlign:'left'}}>
                Transfor Your Business into Mobile Application.
             Mobile is becoming not only the new digital hub, but also the bridge to the physical world.
             <br/>
             So Grow your Business With Us.
                    </p>
 <Button style={{backgroundColor:'#d8d8d8',color:'#102a2a',borderRadius:'50px'}} onClick={()=>this._onButtonClick("mobile")} id="mobilebutton" color="primary">Read more</Button></center>
 <br/>             </div>
                </div>
                </Zoom>

                <Zoom big>
                <div className="col-12 col-md-4 col-sm-6 col-xl-4 col-lg-4" style={{marginBottom:'10px'}}>
                <div  className=" cate" onClick= {this.click} id='wdev'>
            <center>
            <div className={"services"} style={{width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'rgb(140,140,140)'}}>
            <img src={Website}  alt="WEBSITE DEVELOPMENT"
             style={{paddingTop:'18px',paddingBottom:'18px'}}
             />
            </div>
            <p style={{fontWeight:'bold',padding:'5px'}}>WEBSITE DEVELOPMENT
                 </p>
                <p style={{textAlign:'left'}}>
                We built websites with best available technology to provide your user a rich and smooth experience while serving your website.
                One design , all platforms  - Responsive websites
                </p>
 <Button style={{backgroundColor:'#d8d8d8',color:'#102a2a',borderRadius:'50px'}} onClick={()=>this._onButtonClick("webdevelop")} id="webdevelopbutton" color="primary">Read more</Button></center>
 <br/>           </div>
                </div>
                </Zoom>

                
                
                <Zoom big>
  <div className="col-12 col-md-4 col-sm-6 col-xl-4 col-lg-4" style={{marginBottom:'10px'}}>
                <div className=" cate " onClick= {this.click} id='wdes'>
            <center>
           
            <div style={{width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'rgb(140,140,140)'}}>
            <img src={Webdesign} alt="WEB DESIGNING"
             style={{paddingTop:'18px',paddingBottom:'18px'}}
             />
             </div>
             <p style={{fontWeight:'bold',padding:'5px'}}>WEB DESIGNING
                 </p>
                <p style={{textAlign:'left'}}>
               
                  </p>
 <Button style={{backgroundColor:'#d8d8d8',color:'#102a2a',borderRadius:'50px'}} onClick={()=>this._onButtonClick("webdesign")} id="webdesignbutton" color="primary">Read more</Button></center>
 <br/>              </div>

                </div>
                </Zoom> 
                
                <Zoom big >
  <div className="col-12 col-md-4 col-sm-6 col-xl-4 col-lg-4" style={{marginBottom:'10px'}}>
                <div   className=" cate " onClick= {this.click} id='softonic' >
            <center>
           
            <div style={{width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'rgb(140,140,140)'}}>
            <img src={Microservice} alt="SOFTONIC"
             style={{paddingTop:'18px',paddingBottom:'18px'}}
             />
             </div>
             <p style={{fontWeight:'bold',padding:'5px'}}>SOFTONIC
                 </p>
                <p style={{textAlign:'left'}}>
               
</p>
 <Button style={{backgroundColor:'#d8d8d8',color:'#102a2a',borderRadius:'50px'}} onClick={()=>this._onButtonClick("softonic")} id="softonicbutton" color="primary">Read more</Button></center>
 <br/></div>

                </div>
                </Zoom>

                {/* <div className=" col-12 col-md-4 col-sm-6 col-xl-4 col-lg-4" style={{marginBottom:'10px'}}>
                <div className=" cate" >
            <center>
           
            <div style={{width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'rgb(140,140,140)'}}>
            <img src={Debug}
             style={{paddingTop:'18px',paddingBottom:'18px'}}
             />
             </div>
             <p style={{fontWeight:'bold',padding:'5px'}}>DEBUGGING
                 </p>
                <p style={{textAlign:'left'}}>
                We provide the service like debugging to track and 
                correct the bug  that   you have in your Software
                { this.state.showDebuggingComponent ? <DebuggingText/> : <span> ...</span> }
                </p>
                
 <Button style={{backgroundColor:'#d8d8d8',color:'#102a2a',borderRadius:'50px'}} onClick={()=>this._onButtonClick("debugging")} id="debuggingbutton" color="primary">Read more</Button></center>
 <br/>             </div>

                </div> */}


                </div>
        </div>
        </div>
        </center>
        </div>
        
)
    }
}


export default Services;


// WEBPACK FOOTER //
// ./src/component/Services.js