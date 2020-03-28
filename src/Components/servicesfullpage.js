import React,{Component} from 'react';
import './components.css';
import CustomDivider from '../sidehelper/divider';
import Fade from 'react-reveal/Fade';

const servicesheading={
    color:'rgb(182, 181, 181)',
    fontSize:'4vmin',
    cursor:'default'
  }
  const moreservices={
    color:'rgba(255, 255, 255)',
    fontSize:'3vmin',
   cursor:'pointer',
  
  }
const gifright={ width:'65%',float:'right'}
const gifleft={ width:'65%', float:'left'}
const textleft={paddingLeft:'10px'}
//const textright={}
//const gradtext={}
const wrapper={  width:'100%',display:'block',overflowY:'auto',overflowX:'hidden',height: '100%'   }
 

class Servicespage extends Component {
 
  
    componentDidMount(){
window.scrollTo(0, 0)
    
    }
  
     

    render(){
      var divbackground = {

        backgroundImage: `url(${this.props.image})`,
   
      }; 
        {/* OTHER PROPERTIES IN CSS */}
        return(
         
<div style={{paddingBottom:"11em"}} > {/*SAME PADDING AS HEIGHT OF SERVICES HEADING DIV IN COMPONENT.CSS*/}

{/* FIRST BACKGROUND DIV */}

<div className="divbackgroundo" style={divbackground}></div>

<Fade left>
  <div className="servicesheadingdiv" style={{width:'95%'}}>
    <div style={{maxWidth:'65%',position:'absolute',left:'4%'}}>
      <h1 style={servicesheading}>{this.props.header}</h1>
    </div>
    <div style={{position:'absolute',right:'4%'}} className="dcursor">
      <h1  style={moreservices}>More Services...</h1>
    </div>
  </div>
</Fade>



<div  style={wrapper}>

{this.props.image1!==undefined?<Fade right><div style={gifright} id='image1'>
 <img src={this.props.image1} style={{width:'100%'}} alt="services"/>
 </div></Fade>:null}


{this.props.text1!==undefined?
<Fade big>
<div style={textleft}  >

<p className='servicestext'>

{this.props.text1}

</p>
</div> </Fade>

:null}


{this.props.image2!==undefined?
<Fade left>
<div style={gifleft} id='image2'>
 <img src={this.props.image2} style={{width:'100%'}} alt="services"/>
 </div>
 </Fade>
  :null}


</div>

<div> <CustomDivider/> </div>

</div>
        );
    }
}

export default Servicespage;