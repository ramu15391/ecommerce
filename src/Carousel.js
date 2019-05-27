import React, {Component} from 'react'
import { CarouselItemWrapper, CarouselListContainer, CarouselImage,  CarouselLeftButton, CarouseRightButton } from './CarouselStyle'

class MediaCarousel extends Component {

	constructor(){
		super();
		this.state= {transition : '0',
			count: 1,
		};
		this.carouselSlide.bind(this);
		console.log(this.props)
	}
    carouselBuilder() {
    	const carouselData = []
    	// eslint-disable-next-line indent
        console.log('carouselElement', this.props)
    	const carouselStack = [
    		'https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg',
    		'https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg',
    		'https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg',
    		'https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg',
    		'https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg',
    		'https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg',
    	];
    	for(let carouselElement = carouselStack.length-1; carouselElement >= 0; carouselElement--){
    		carouselData.push(<CarouselItemWrapper><CarouselImage src={carouselStack[carouselElement]}/></CarouselItemWrapper>)
    		console.log('carouselElement', carouselElement)
    	}
    	return carouselData
    }
    carouselSlide() {
    	if(e.keyCode == "37"){
            let count = this.state.count
            console.log("this.state.count", this.state.count)
            let transitionPx = -(count * 300)
            this.setState({transition : transitionPx +'px'})
            this.setState({count : this.state.count++})
            console.log("transitionPx", transitionPx)
            console.log("count", count)
    	}
    	else if (e.keyCode == "39"){
    		console.log("right")
    		this.setState({transition : '300px'})
    	}
    }
    goBack(){
      console.log('history'+ this.props.match);
      this.props.history.push('/loosu');
    }
    render(){
		console.log('carouselElement', this.props.liyaz)
    	return(
    		<section>
    			<CarouselListContainer data= {this.state.transition}>
    				{this.carouselBuilder()}
    				<CarouselLeftButton>left</CarouselLeftButton>
					<CarouseRightButton>right</CarouseRightButton>
				</CarouselListContainer>
				<button onClick={this.goBack}>GoBack</button>
    		</section>
    	)
    }
}

export default MediaCarousel
export { MediaCarousel }