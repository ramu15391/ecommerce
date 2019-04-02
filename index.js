import React from 'react'
import ReactDOM from 'react-dom' 
import './index.css'
import APP from './app'
class Main extends React.Component{
    render(){
        return(
            <APP/>
        )
    }
}
ReactDOM.render(<Main/> ,document.getElementById('root'))