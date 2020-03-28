import React from 'react';
// import ImageSlider from '../src/component/Slider';

import ContactUs from '../Components/contactus';
 import CustomDivider from './divider'
import Services from '../Components/services';
import Welcome from '../Components/welcome';
import './sidehelper.css';
 import Topbar from './topbar';
import TalkWithUs from './talkwithus';
import ImageSlider from '../Components/slider';
 import INEXP from '../Components/indusexpert';
import Technology from '../Components/technologies';


export default class HomePage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
          quoteVisible: false,loader:true,
        };
        
      }
     
      componentDidMount(){
        this.setState({...this.state,loader:false});
      }

      

    goToPage = (pageNumber) => {
        this.reactPageScroller.goToPage(pageNumber);
      }
      showSettings (event) {
        event.preventDefault();
      }

    render(){
    
        return(
         
        <div>
          {this.state.loader?<div>LOADING</div>:
          
<div id='allmain'>

   <ImageSlider /> 

   <div className="hvr-bob artbutton hvr-shutter-out-horizontal" onClick={()=>this.props.history.push('/ArtGallery')} >
      VIEW OUR <br/>ART GALLERY
      </div>                                                                                                                                                                                                                                                                                                                                        
      
   <CustomDivider/>
     <Welcome/>
     <CustomDivider/>
              <Services history={this.props.history} />
                    <CustomDivider/>
                     <INEXP/> 
      <CustomDivider/>  
       <Technology/>
       <CustomDivider/>
      <ContactUs/>
      <CustomDivider/> 
      <Topbar/>
      <TalkWithUs/>
      
             </div>}

               




              


      



         



  {/*END OF ALL*/}
         </div>
     

                   );
    }
}


// WEBPACK FOOTER //
// ./src/MainPage.js