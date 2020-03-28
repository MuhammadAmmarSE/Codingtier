import React,{Component} from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
import firebase from './firebase';
import Loader from '../images/logoimagesloader2.gif'
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, withStyles } from '@material-ui/core/styles';


var storage = firebase.storage();
var storageRef = storage.ref();
var imgRef = storageRef.child('logos/1.png');
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

  


class CubeEffect extends Component {

    constructor(props){
super(props);
       this.state={loader:0};
       this.loadimages=this.loadimages.bind(this);
       this.getimage=this.getimage.bind(this);
    }

  async  loadimages(){

        for(var i=1;i<=16;i++){
            
        var image=i;
        var path=image+".png";
var imageRef=imgRef.parent.child(path);
await imageRef.getDownloadURL().then((url)=>this.getimage(url,i));

}
         }
         getimage(url,i){
          images[i-1]=url;
          var loader=(i/18)*100;
      this.setState({...this.state,loader});   
          console.log(images.length);   
         }

    componentDidMount(){  images=[]; this.loadimages(); }
    
    render(){
        

    const params = {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: '.swiper-pagination',
        }
      }
 
    
  
      return ( 
            <div style={{}}>
            {images.length===16?
      <div>
        
 {console.log("ok")}
      <Swiper {...params}>

 {images.map((image,i)=> 
 <div className="swiper-slide" key={i} style={{height:'300px',width:'300px',background:`url(${image}) no-repeat center  `}}  ></div>)} 
  
        </Swiper>
        </div>:
        <div style={{width:'300px',height:'300px'}}>
          
<img src={Loader} width="300px"  alt="loading images"/>

<BorderLinearProgress
     
        variant="determinate"
        color="secondary"
        value={this.state.loader}
      />
        </div>}
        </div>
        )
   
}
}
 
    export default CubeEffect;