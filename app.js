import React from 'react'
import { Homepage } from './containers/Homepage/homePage'
import { homedir } from 'os';
class APP extends React.Component{
    render(){
        return(
            <div><Homepage></Homepage></div> 
        )
    }
}

export default APP
export { APP }