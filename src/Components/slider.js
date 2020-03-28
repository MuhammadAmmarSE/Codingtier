import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Slider from 'react-animated-slider';
//slider images
import SliderImage1 from '../images/slider/slider1.png';
import SliderImage2 from '../images/slider/slider2.png';
import SliderImage3 from '../images/slider/slider3.png';
import SliderImage4 from '../images/slider/slider4.jpg'
import 'react-animated-slider/build/horizontal.css';
// import 'normalize.css/normalize.css';
import './slider-animations.css';
import './components.css';
import Logo from '../images/logoimage.png';

const content = [
	{
		title: 'MANAGE YOUR ORGANIZATION WITH OUR SOFTWARES',
		description:'We provide excellence software that can tweak your business into a bunch of lines.',
		// button: 'Read More',
		image: SliderImage1,
		user: 'CODING TIER',
		userProfile: Logo
	},
	{
		title: 'TRANSFROM YOUR BUSINESS INTO MOBILE APPLICATION',
		description:'Mobile is becoming not only the new digital hub, but also the bridge to the physical world. That’s why mobile will affect more than just your digital operations — it will transform your entire business.',
		// button: 'Read More',
		image: SliderImage4,
		user: 'CODING TIER',
		userProfile: Logo
	},
	{
		title: 'WE BRING YOUR IMAGINATION INTO REALITY',
		description:'"Every great design begins with an even better story." ---- Lorinda Mamo.    Design Your  Website , \n The Way You Love It.'
		,
		
		image: SliderImage2,
		user: 'CODING TIER',
		userProfile: Logo
	},
	{
		title: 'WEBSITES PROMOTE YOU 24/7: NO EMPLOYEE WILL DO THAT',
		description:
		"A successful website does three things: \n It attracts the right kinds of visitors.	Guides them to the main services or product you offer.	Collect Contact details for future ongoing relation",
		// button: 'Buy now',
		image: SliderImage3,
		user: 'CODING TIER',
		userProfile: Logo
	}
];

	class ImageSlider extends Component{
render(){
	return(
        <div >
			<div className="extra-upper-div" style={{}}>
 <div className="extra-upper-heading">THE WAY TO YOUR SOLUTIONS</div>
			</div>
	  <ScrollableAnchor id={'home'}>
	  <div>
		  </div>
      </ScrollableAnchor>
		<Slider touchDisabled ={false} autoplay={3000}	 className="slider-wrapper" >
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content parallax"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						{/* <button>{item.button}</button> */}
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							 <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
        </div>
)}

}

export default ImageSlider;



// WEBPACK FOOTER //
// ./src/component/Slider.js