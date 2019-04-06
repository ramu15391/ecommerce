
import React from 'react'

class constIntro extends React.Component{
    render(){

        console.log('match',this.props)
        
        return(
            <div>const is similar to variable</div>
        )
    }
}

function letIntro(){
    return(
        <div>Let is similar to variable</div>
    )
}

export { constIntro, letIntro }