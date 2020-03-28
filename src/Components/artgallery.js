import React, { Component } from 'react';
import CubeEffect from '../sidehelper/logogallery';
import CoverflowEffect from '../sidehelper/socialpost';
import Zoom from 'react-reveal/Zoom';   
import './components.css';
import Artwork from '../sidehelper/artwork';
import Divider from '../sidehelper/divider';
import Logoback from '../images/logoback.jpg';

class ArtGallery extends Component {

   
    render() { 
        return ( <div style={{background:"white"}}>
          <div className="extra-upper-div" >
 <div className="extra-upper-heading">THE WAY TO YOUR SOLUTIONS</div>
			</div>
<center>

<div className={"col-lg-10"} style={{backgroundColor:'rgb(0,0,0,0)',color:'black',borderRadius:'5px',paddingLeft:'20px',paddingRight:'20px',paddingTop:'20px'}}>
<div className="welcomeheadingdivup">  
<Zoom> <h1 className="welcomeheading dcursor">OUR MARKETING MANAGEMENT</h1> </Zoom> 
</div>
<div style={{background:'rgb(0,0,0,0.1)',paddingBottom:'20px',paddingTop:'20px',textAlign:"left",fontSize:'1.5em'}}>
<p className="gallerytextone">CodingTier is pleased to introduce itself in the industry of marketing.
After a huge success and capturing large market share in local mobile/web development industry,
CodingTier have show its keen interest to serve its customer in the marketing segment. 
Through our invaluable team and their indefatigable work ,CodingTier is making its way in marketing industry too.
</p>
<br/>
<p className="galleryheadingone">
About Our Marketing 
</p>
<Divider/>
<p className="gallerytextthree">
We have a team of people who are dedicated , creative , hardworkers which are always looking to deliver the thing on a high note.
We manage social media account and provide eye catching designs relevant to the subject.
We provide highly likable graphic materials that are up to your likings. </p>
<br/>
<p className="galleryheadingone">
Our marketing service includes</p>
<Divider/>
<p className="gallerytexttwo">
◈ Social media post ( facebook , twitter , Instagram ) <br/>
◈ brouchers, menus<br/>
◈ visiting cards<br/>
◈ logos <br/>
◈ Facebook Likes/Advertisement <br/>
◈ Google Ads<br/>
◈ Traffic Generating<br/>
◈ Backlinks<br/>
◈ Seo
</p>
</div>
</div>


<div className={"col-lg-10"} style={{backgroundColor:'rgb(0,0,0,0)',color:'black',borderRadius:'5px',paddingLeft:'20px',paddingRight:'20px'}}>
<div className="socialpostheadingdivmiddle">  
  <Zoom> <h1 className="welcomeheading dcursor">LOGOS  </h1> </Zoom> 
</div>
<div id='logobox' style={{backgroundImage:`url(${Logoback})`  }}>
  <div style={{width:"300px",paddingTop:'40px',paddingBottom:'40px'}}><CubeEffect /></div> 
  </div>
</div>



<div className={"col-lg-10"} style={{backgroundColor:'rgb(0,0,0,0)',color:'black',borderRadius:'5px',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'20px'}}>
<div className = "socialpostheadingdivmiddle" >  
  <Zoom> <h1 className="welcomeheading dcursor">SOCIAL POST  </h1> </Zoom> 
</div>
<CoverflowEffect/>
</div>



<div className={"col-lg-10"} style={{backgroundColor:'rgb(0,0,0,0)',color:'black',borderRadius:'5px',paddingLeft:'20px',paddingRight:'20px',paddingTop:'20px'}}>
<div className="socialpostheadingdivmiddle">  
  <Zoom> <h1 className="welcomeheading dcursor">ART WORK  </h1> </Zoom> 
</div>
<Artwork/>
</div>

<div className={"col-lg-10"} style={{backgroundColor:'rgb(0,0,0,0)',color:'black',borderRadius:'5px',paddingLeft:'20px',paddingRight:'20px',paddingTop:'20px'}}>
<div className="welcomeheadingdivdown">  
  <Zoom> <h1 className="welcomeheading dcursor"> GET STARTED WITH US  </h1> </Zoom> 
</div>
</div>





     </center>

    
    
        </div> );
    }
}
 
export default ArtGallery;