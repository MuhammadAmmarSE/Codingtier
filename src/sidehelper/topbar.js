
import React from 'react';
import TobarImage from '../images/topbar1.png';
import './sidehelper.css';


export default class Topbar extends React.Component{
    componentWillMount(){
        window.addEventListener('scroll',this.handleScroll)
    
      }
      componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
      }

      handleScroll(){
       let topbar= document.getElementById('top');
       if(window.pageYOffset>=120){
        topbar.classList.add("toppbarb");
    
       }
       else{
        topbar.classList.remove("toppbarb");
       }
      }
    
    render(){
        return(
            <div  id="top" className="toppbar" >
                
            <a href='#home'  >
        <img src={TobarImage}  alt="GoToTop" onClick={()=>{}}   style={{width:'60px',height:'60px',zIndex:2}} />
        </a>
        </div>  
        )
    }
}
