import React, { Component } from 'react';
import Gallery from "react-photo-gallery";
import Loader from '../images/randomimagesloader.gif'
import firebase from '../sidehelper/firebase';
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, withStyles } from '@material-ui/core/styles';

const numberofphotos=27

var storage = firebase.storage();
var storageRef = storage.ref();
var imgRef = storageRef.child('randomwork/1.jpg');
var images=[];

const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: lighten('rgb(8, 3, 49,1)', 0.5),
    },
    bar: {
      borderRadius: 20,
      backgroundColor: 'rgb(16,16,42)',
    },
  })(LinearProgress);






class Artwork extends Component {
    constructor(props){
        super(props);
               this.state={loader:0,photos:[
                { src: null,width:1,height:1, },{ src: null ,width:2,height:1,},//2
                { src: null,width:4,height:3, },{ src: null ,width:4,height:3,},//4
                { src: null,width:3,height:2, },{ src: null ,width:1,height:1,},//6
                { src: null,width:1,height:1, },{ src: null ,width:4,height:3,},//8
                { src: null,width:1,height:1, },{ src: null ,width:6,height:4,},//10
                { src: null,width:1,height:1, },{ src: null ,width:4,height:3,},//12
                { src: null,width:1,height:1, },{ src: null ,width:1,height:1,},//14
                { src: null,width:1,height:1, },{ src: null ,width:4,height:3,},//16
                { src: null,width:1,height:1, },{ src: null ,width:6,height:3,},//18
                { src: null,width:1,height:1, },{ src: null ,width:4,height:3,},//20
                { src: null,width:2,height:1, },{ src: null ,width:1,height:1,},//22
                { src: null,width:1,height:1, },{ src: null ,width:1,height:1,},//24
                { src: null,width:1,height:1, },{ src: null ,width:1,height:2,},//26
                { src: null,width:1,height:1, },
               ]};
               this.loadimages=this.loadimages.bind(this);
               this.getimage=this.getimage.bind(this);
            }
            async  loadimages(){
       
              
        
                for(var i=1;i<=numberofphotos;i++){
                    
                var image=i;
                var path=image+".jpg";
        var imageRef=imgRef.parent.child(path);
        await imageRef.getDownloadURL().then((url)=>this.getimage(url,i))
        }
      }
      getimage(url,i){
        images[i-1]=url;
        var loader=(i/28)*100;
        var photos=this.state.photos;
        photos[i-1].src=images[i-1];
       this.setState({...this.state,loader,photos});   
      }
                 componentDidMount(){  images=[]; this.loadimages(); }


    render() { 
        return (
<div>
{images.length===numberofphotos?
<Gallery photos={this.state.photos}   />
   
: <div style={{width:'300px',height:'300px'}}>

<img src={Loader} width="300px"  alt="loading images"/>
<BorderLinearProgress
     
        variant="determinate"
        color="secondary"
        value={this.state.loader}
      />
        </div>}


</div>


          );
    }
}
 
export default Artwork;