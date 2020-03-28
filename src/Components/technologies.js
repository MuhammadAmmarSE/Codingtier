import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Zoom from 'react-reveal/Zoom';

 import ScrollableAnchor from 'react-scrollable-anchor';

import ReactNative from '../images/tecgimg-services-circled/react-native-technology-circle.png';
import ReactImage from '../images/tecgimg-services-circled/react-js-technology-circle.png';
import Angular from '../images/tecgimg-services-circled/angular-technology-circle.png';
import Bootstrap from '../images/tecgimg-services-circled/bootstrap-technology-circle.png';
import Electron from '../images/tecgimg-services-circled/electron-technology-circle.png';
import Arduino from '../images/tecgimg-services-circled/arduino-technology-circle.png';
import DotNet from '../images/tecgimg-services-circled/dotnet-technology-circle.png';
import Html from '../images/tecgimg-services-circled/html-technology-circle.png';
import Javascript from '../images/tecgimg-services-circled/js-technology-circle.png';
import Firebase from '../images/tecgimg-services-circled/firebase-technology-circle.png';
import MySql from '../images/tecgimg-services-circled/mysql-technology-circle.png';
import Illustrator from '../images/tecgimg-services-circled/ai-technology-circle.png';
import Java from '../images/tecgimg-services-circled/java-technology-circle.png';
import Mongo from '../images/tecgimg-services-circled/mongodb-technology-circle.png';
import NodeJs from '../images/tecgimg-services-circled/nodejs-technology-circle.png';

import TechArrow from '../images/techarrow.png';

// list of items
const list = [
  ReactNative,
    Angular,
    ReactImage,
    Bootstrap,
    Html,
    Javascript,
    MySql,
    Mongo,
    DotNet,
    Electron,
    Arduino,
    Firebase,
    NodeJs,
    Java,
    Illustrator
   
   ];

  
  
   const MenuItem = (imgurl) => {
     return (
       <div
         className="menu-items"
       >
   
       
        <img src={imgurl.imgurl} draggable="false" style={{width:'150px',height:'150px'}} alt="technology"/> 

       </div>
     );
   };
    
   // All items component
   // Important! add unique key
   export const Menu = (list) => list.map(imgurl => {

  
     return (
       <MenuItem 
         imgurl={imgurl}
      key={imgurl}
       />
     ); 
   });
    
    
   const Arrow = ({ text, className }) => {
     return (
       <div
         className={className}
       ><img src={text.TechArrow} alt="arrow"/>
      
       </div>
     );
   };
    
    
   const ArrowLeft = Arrow({text: {TechArrow}, className: 'arrow-prev' });
   const ArrowRight = Arrow({ text: {TechArrow}, className: 'arrow-next' });
    
   export default class Technologies
    extends Component {
     state = {
       selected: 'item1'
     };
     
     onSelect = key => {
       this.setState({ selected: key });
     }
    
     
     render() {
       const { selected } = this.state;
       // Create menu from items
       const menu = Menu(list, selected);
    
       return (
         <div >
       <ScrollableAnchor id="technologies"><div></div></ScrollableAnchor>
           <center>
         <div className={"col-lg-10"} style={{backgroundColor:'rgb(0,0,0,0)',color:'black'}}>
                <div className="welcomeheadingdivup">
                <Zoom> <h1 className="welcomeheading" style={{ }}>TECHNOLOGIES WE USE
                    </h1> 
                    </Zoom>
                    </div>
                    <br/>
                    <Zoom>
           <ScrollMenu
       
             data={menu}
             arrowLeft={ArrowLeft}
             arrowRight={ArrowRight}
             selected={selected}
             onSelect={this.onSelect}
             inertiaScrolling={true}
             alignCenter={false}
           /></Zoom>
    <br/>
            <div className="welcomeheadingdivdown">
            <Zoom> <h1 className="welcomeheading" style={{ }}>RESHAPING YOUR IDEAS
                    </h1> 
            </Zoom></div>
                  
                </div>
       </center>
         </div>
       );
     }
   }
    
