import React, { Component } from 'react';
import firebase from './firebase';
  import Swiper from 'react-id-swiper';
  import LinearProgress from '@material-ui/core/LinearProgress';
  import { lighten, withStyles } from '@material-ui/core/styles';
  import Loader from '../images/socialimagesloader.gif'

  var storage = firebase.storage();
  var storageRef = storage.ref();
  var imgRef = storageRef.child('socialpost/1.png');
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

  class CoverflowEffect extends Component {

    constructor(props){
      super(props);
             this.state={loader:0};
             this.loadimages=this.loadimages.bind(this);
             this.getimage=this.getimage.bind(this);
          }

          async  loadimages(){
       
            for(var i=1;i<=36;i++){
                
            var image=i;
            var path=image+".png";
    var imageRef=imgRef.parent.child(path);
    await imageRef.getDownloadURL().then(url=>this.getimage(url,i));
    }
             }

             getimage(url,i){
              images[i-1]=url;
              var loader=(i/36)*100;
          this.setState({...this.state,loader});   
              console.log(images.length);   
             }


             componentDidMount(){  images=[]; this.loadimages(); }
             render(){
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    }
    return (
      <div style={{marginBottom:'40px'}}>
        {images.length===36?
      <Swiper {...params}>
       {images.map((image,i)=> 
 <div className="swiper-slide" key={i} style={{marginTop:'40px',height:'400px',width:'400px',background:`url(${image}) no-repeat center  `}}  ></div>)} 
      </Swiper>:

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
  export default CoverflowEffect;