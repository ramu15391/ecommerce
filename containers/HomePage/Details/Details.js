import React from 'react'
import {sectionElement, containerElement, headerElement} from './styledDetails'

class Details extends React.Component{
    render(){
        return(
            <sectionElement>
                <headerElement></headerElement>
                <containerElement>
                    <div>Contnen</div>
                </containerElement>
            </sectionElement>
        )
    }
}

export { Details }