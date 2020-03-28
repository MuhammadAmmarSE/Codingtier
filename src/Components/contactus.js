import React from 'react';
import firebase from '../sidehelper/firebase'; 
import Alert from '../sidehelper/alert';
import ScrollableAnchor from 'react-scrollable-anchor'
import Button from '@material-ui/core/Button';
import ReCAPTCHA from "react-google-recaptcha";

import Address from '../images/map.png';
import Phone from '../images/newphone.png';
import Email from '../images/newmail.png'
export default class ContactUs extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            email:'',
            message:'',
            value:'',
            errmessage:'',
        alertOpen:false,successOpen:false
}
this.handleAlertOpen=this.handleAlertOpen.bind(this);
this.handleAlertClose=this.handleAlertClose.bind(this);
this.handleSuccessClose=this.handleSuccessClose.bind(this);
        this.Change=this.Change.bind(this);
        this.Submit=this.Submit.bind(this);
    }
    
  handleAlertOpen = (errmessage) => {
    this.setState({ ...this.state,alertOpen: true,errmessage});
  };
  handleAlertClose = () => {
    this.setState({ ...this.state,alertOpen: false,errmessage:'' });
  };


  handleSuccessClose = () => {
    this.setState({ ...this.state,successOpen: false });
  };
    Change(event) {
        this.setState({ ...this.state,[event.target.name]: event.target.value });
     

    }
     onChange(value) {
      console.log("Captcha value:", value);
      if(value){
          this.setState({...this.state,value});
      }
      console.log(this.state.value)
    }
    Submit(obj){
      firebase.database().ref('/').child('userEmail').push(obj);

    }
  
    
  render() {
    return (
      
      <div style={{backgroundColor:'rgb(116,131,140,0.7)',marginBottom:'5px',color:'#fff'}}>
      <ScrollableAnchor id={'contact'}>
      <div>
        </div>
</ScrollableAnchor>
      <div className="container" style={{backgroundColor:'',marginTop:'10px',paddingBottom:'10px'}}>
      <center>
<h1 className="contactus" style={{cursor:'default'}}>Contact Us</h1>
</center>

      <div className="row">

        <div className="col-6 col-xl-6 col-sm-6 col-lg-6">

        <div className="centre">

      <div className="row">

 <div className="form-group col-md-6 col-xs-6 col-sm-6 col-lg-6">
    <input type="text" className="form-control"
     value={this.state.firstname}
    onChange={this.Change}
    name="firstname"  placeholder="First Name"/>
  </div>
   <div className="form-group col-md-6 col-xs-6 col-sm-6 col-lg-6">
    <input type="text" className="form-control"
     value={this.state.lastname}
    onChange={this.Change}
                                        name="lastname" placeholder="Last Name" />
  </div>
   </div>
  <div className="form-group">
    <input type="email" className="form-control" 
    onChange={this.Change}
    value={this.state.email}
    name="email" placeholder="Enter email" />
  </div>
  

 
  
  <div className="form-group">
      <textarea className="form-control" rows="5" 
       value={this.state.message}
       placeholder="Message" onChange={this.Change}
                                        name="message"></textarea>
                                        
    </div>

<br/>
    <div className="form-group">
    <ReCAPTCHA
    sitekey="6LeeNH4UAAAAAHpX5ARCGSEoJjm3xJ-GnQj9SM1A"
    onChange={this.onChange}
  />
  </div>

    <div>
 {/* <button type="button" style={{width:'50%',backgroundColor:'lightblue'}} className="btn" >Submit</button> */}
 <Button  style={{width:'50%',color:'#000',fontWeight:'bold',backgroundColor:'rgb(216,216,216)',borderWidth:'2px',borderColor:'#10102a'}} onClick={()=>{
  
  if(this.state.email!==''&&this.state.firstname!==''&&this.state.lastname!==''&&this.state.message!=='')
   {
       console.log(this.state.value)
    if(this.state.value){
   this.Submit(this.state);
   this.setState({...this.state,firstname:'',lastname:'',message:'',email:'',successOpen:true});}

   else{this.handleAlertOpen("Captcha is Required");}

}
   else{ 
    this.handleAlertOpen("All feilds are required");
   }
}}>Submit</Button>
   <Alert open={this.state.alertOpen} close={()=>this.handleAlertClose} message={this.state.errmessage}/>
   <Alert open={this.state.successOpen} close={()=>this.handleSuccessClose} message={'Thankyou for your time , we will contact you on given email '}/>
        </div>
        
    </div>
    
    
     
        </div> 
       
        <div className="col-6 col-xl-6 " >

        
          
      
          <div style={{fontSize:'14px',marginTop:'10%'}}>

              <div className="hvr-grow paddingBottom">
                  
          <img alt="address" src={Address}/>
             <span style={{marginLeft:'20px'}}>  
             <label style={{fontSize:'18px',fontWeight:'bold'}}>Address</label>
             <a className="nolink" href="https://www.google.com/maps/@24.9229887,67.0580012,19z" rel="noopener noreferrer" target="_blank">
          <span style={{marginLeft:'20px'}}>C-31 / A Block 6 f.b area Karachi , Sindh Pakistan.
              </span></a>
              </span>
              
              </div>

          <div className="hvr-grow paddingBottom">
              <img alt="phone" src={Phone}/> 
              <span style={{marginLeft:'20px'}}> 

               <label style={{fontSize:'18px',fontWeight:'bold',paddingRight:'10px'}}>Phone Number</label>
         
          <span >
        <a className="nolink" href="tel:+923061330660" >+92 3061330660</a>,
        <a className="nolink" href="tel:+923410170547" >+92 3410170547</a>
        </span>
          </span>
          </div>
<div className="hvr-grow">
  <img alt="email "src={Email}/> 
  <span style={{marginLeft:'20px'}}>  
  <label style={{fontSize:'18px',fontWeight:'bold',paddingRight:'10px'}}>Email</label>
  <span >
  <a  className="nolink" href="mailto:info@CodingTier.com?Subject=Services%20Enquiry" target="_top">info@codingtier.com </a> ,
  <a  className="nolink" href="mailto:cmo@CodingTier.com?Subject=Services%20Enquiry"  target="_top">cmo@codingtier.com  </a> 
  </span>
  </span>
       
                      
       </div>
          </div>
    
        <div style={{padding:'10px'}}>
   
   {/* <a href="http://facebook.com/codingtier"  target="_blank">
              <img className="socialicon" style={{padding:'15px',borderRadius:'50%',marginRight:'10px'}}  src={Facebook}/>
</a> */}
     
      {/* <a href="http://bit.ly/CodingTierGoogle" target="_blank" >
                <img className="socialicon"  style={{padding:'15px',borderRadius:'50%',marginRight:'10px'}}  src={Google}/>

        </a> */}
     
      {/* <a href="https://www.linkedin.com/in/coding-tier-52228b172/" target="_blank">
      <img className="socialicon" style={{padding:'15px',borderRadius:'50%',marginRight:'10px'}}  src={Twitter}/>

        </a> */}

        </div>
        
        </div>
        </div>

      
      </div>
 </div>
 
 );
  }
}