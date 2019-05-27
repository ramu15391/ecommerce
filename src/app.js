import React from 'react'
import { Homepage } from './page/Homepage/homePage'
import { ServerRouter  } from 'react-router-dom';
import { streamData } from './data'
import {MediaCarousel} from './Carousel'
class APP extends React.Component{
    render(){
        console.log('app', this.props)
        console.log('streamData', streamData)
        return(
            // <ServerRouter>
            //     <Homepage {...this.props}></Homepage>
            // </ServerRouter> 
            <div><MediaCarousel/></div>
        )
    }
}

export default APP
export { APP }