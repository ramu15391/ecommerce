import React from 'react'
import { Homepage } from './containers/Homepage/homePage'
import { BrowserRouter } from 'react-router-dom';
import { streamData } from './data'
class APP extends React.Component{
    render(){
        console.log('app', this.props)
        console.log('streamData', streamData)
        return(
            <BrowserRouter>
                <Homepage {...this.props}></Homepage>
            </BrowserRouter> 
        )
    }
}

export default APP
export { APP }