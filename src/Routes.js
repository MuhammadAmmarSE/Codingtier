import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './sidehelper/history';
import Footer from './Components/footer';
import Homepage from './sidehelper/homepage'
import ArtGallery from './Components/artgallery';
import Navbar from './Components/newnavbar';


import Servicespage from './Components/servicesfullpage';
import services2 from './images/servicesfullpage/service.gif';
import services1 from './Components/socialicons/gif11.gif';
import dm1 from './Components/socialicons/dm1.gif';
import dm2 from './Components/socialicons/dm2.gif';
import MobileService from './images/servicesfullpage/mobileservice.jpg';
import GraphicService from './images/servicesfullpage/graphicservice.jpg';
import WebsiteService from './images/servicesfullpage/websiteservice.jpg';
import DesktopService from './images/servicesfullpage/desktopservice.jpg';
import ConsultancyService from './images/servicesfullpage/consultancyservice.jpg';
import DatabaseService from './images/servicesfullpage/databaseservice.png';
import DebugService from './images/servicesfullpage/debugservice.jpg';
import WebDesignService from './images/servicesfullpage/webdesignservice.jpg';
import SoftonicService from './images/servicesfullpage/softonicservice.jpg';
const servicestext = 'We provide solutions to your Virtual world problems.'+
'We offers solutions to your problem in a very lavish way that potray us unique and different'+
' from our competitors. We are not only product producer and providers, we also gives our clients'+
 ' 24/7 consultancy to ensure trust between us. We go beyond every limits to strengthen the turst wires with our clients. Our service is not just a conventional service but its a liable connection which is a sign of bond between us and our customers.  We pride ourselves on working closely with our clients. Our vision is to serve the clients with the best of best without compromising their requirements. Coding Tier offers top-notch services in web-designing , graphic designing, Android application, Ios application , desktop application as well as web hosting , data management and hardware embedded systems. We are also fanatical about good customer service, we deeply listens clients requirements and try to plot their ideas in virtual world. we dig down deep , work hard in order to achieve maximum client satisfaction.We flawlessly plans and execute every project.'
 const dmtext= ['Our Experts are capable of dealing with your data and manage it efficiently. We can Provide Management of',<br/> ,
'◈ Data Integrity',<br/> ,
'◈ Efficient Storage Usage',<br/> ,
'◈ Database Connectivity',<br/> ,
'◈ Effective data accessibility']
const gdtext=['We provides stylish sober ,glitirized ,ambient styled graphic designing on various item such as',<br/> ,
'◈ Cards ',<br/> ,
'◈ Logos',<br/> ,
'◈ Posters',<br/> ,
'◈ Panaflex',<br/> ,
'◈ Photo Editing' ]
const matext='We create mobile application and also provide real time Data storage for mobile application.'+
'Our application is built using latest technology and also supports hybrid environment. Includes: - Sliders, Content, Carting, Mailing Services Authentication and much more.'
const wdevtext='Our team have imperative skills on latest technology to built website. We offers swift bug free website'+
'We offers swift bug free website built using latest technology and platform.'      
const debugtext='We provide services of debugging to track and correct the bug that you have in your Software'+
'That bug may harm your software which can lead to inaccurate way of working according to the set specification. Our team checks ,detect and correct bugs to allow proper program operation.'
const wdestext='Our team represent the honour of reflecting our client imagination into reality. We design the upmost requirement of our client'+
' without compromissing the ethics of website.'
const softonictext=["We have experienced employee that trains microprocessor to accomplish your work. We use Arduino and raspberry pie "+
"to train hardware. We also create small software based hardware. We create trained hardwares such as",<br/> ,
"◈ Car Locking system", <br/> ,
"◈ Automated Machine", <br/> ,
"◈ IOT Based Hardware", <br/> ,
"◈ Remote Control Devices", <br/> ,
"◈ Infrared, Bluetoth, Wifi Devices"]
const datext=['We have a skillful team specialized for desktop applications. We have expertise in software such as'+
   <br/> ,
'◈ Banking systems' , <br/> ,
'◈ Business management system' , <br/> ,
'◈ Stock entry system' , <br/> ,
'◈ Retail sales systems' , <br/> ,
'◈ And we can also deliberately translate your requirements into desktop application for your personal use.']



export default class Routes extends React.Component{
    

    render(){
       
        return (<Router history={history}>
<div id="outer">

<Route   path='/' render={(routesProps) => <Navbar {...routesProps} history={history} />} />

{/* <Route  exact path='/' render={(routesProps) => <Navigation {...routesProps} history={history} />} /> */}

<div id="page-wrap">
<Route exact path='/'render={(routesProps) => <Homepage {...routesProps} history={history }/>} />
<Route exact path='/services'render={(routesProps) => <Servicespage {...routesProps} header={'OUR SERVICES - SOLUTIONS TO YOUR VIRTUAL WORLD PROBLEMS'} image={services2} image1={services1} text1={servicestext}/> } />
<Route exact path='/ArtGallery' component={ArtGallery} />
            <Route exact path='/services/dm'render={(routesProps) => <Servicespage {...routesProps} header={'DATABASE MANAGEMENT - MAINTAIN EVERY RELATION'}  image={DatabaseService}  image1={dm2}  image2={dm1}  text1={dmtext}/> } /> 
            <Route exact path='/services/da'render={(routesProps) => <Servicespage {...routesProps} header={'DESKTOP APPLICATION - MANAGE YOUR BUSINESS'} image={DesktopService} text1={datext}/>} />
            <Route exact path='/services/gd'render={(routesProps) => <Servicespage {...routesProps} header={'GRAPHIC DESIGNING - BRING YOUR IMAGINATION INTO REALITY'} image={GraphicService} text1={gdtext}/>} />
            <Route exact path='/services/ma'render={(routesProps) => <Servicespage {...routesProps} header={'MOBILE APPLICATION - TRANSFORM YOUR BUSINESS'} image={MobileService} text1={matext}/>} />
            <Route exact path='/services/wdev'render={(routesProps) => <Servicespage {...routesProps} header={'WEB DEVELOPMENT - SHOWCASE YOUR HUB'} image={WebsiteService} text1={wdevtext}/>} />
            <Route exact path='/services/debug'render={(routesProps) => <Servicespage {...routesProps} header={'DEBUGGING - MAKE YOUR SYSTEM INVULNERABLE '}  image={DebugService} text1={debugtext}/>}/>
            <Route exact path='/services/wdes'render={(routesProps) => <Servicespage {...routesProps} header={"WEB DESIGNING - DESIGN THAT'S WORTH EVERYTHING "} image={WebDesignService} text1={wdestext}/>} />
            <Route path='/services/softonic'render={(routesProps) => <Servicespage {...routesProps} header={'SOFTONIC - PERFECT COMBO OF HARDWARE AND SOFTWARE'} image={SoftonicService} text1={softonictext}/>} />
            <Route path='/services/fypconsult'render={(routesProps) => <Servicespage {...routesProps} header={'CONSULTANCY - MAXIMIZE YOU PROJECT WITH US'} image={ConsultancyService} text1={softonictext}/>} />

<Route exact path='/' component={Footer} />
</div>
    </div>
    </Router>);
    }
    }
