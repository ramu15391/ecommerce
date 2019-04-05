import React from 'react'
import { Homepage } from './containers/Homepage/homePage'
import { BrowserRouter } from 'react-router-dom';
class APP extends React.Component{
    render(){
        console.log('app', this.props)
        return(
            <BrowserRouter>
                <Homepage {...this.props}></Homepage>
            </BrowserRouter> 
        )
    }
}

export default APP
export { APP }