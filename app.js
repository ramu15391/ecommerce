import React from 'react'
import { Homepage } from './containers/Homepage/homePage'
import { BrowserRouter } from 'react-router-dom';
class APP extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Homepage></Homepage>
            </BrowserRouter> 
        )
    }
}

export default APP
export { APP }