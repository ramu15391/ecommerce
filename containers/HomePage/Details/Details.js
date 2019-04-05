import React from 'react'
import {SectionElement, ContainerElement, HeaderElement} from './styledDetails'

class Details extends React.Component{
    render(){
        return(
            <SectionElement>
                <HeaderElement></HeaderElement>
                <ContainerElement>
                    <div>Contnen</div>
                </ContainerElement>
            </SectionElement>
        )
    }
}

export { Details }