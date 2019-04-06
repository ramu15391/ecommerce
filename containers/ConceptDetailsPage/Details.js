import React from 'react'
import {SectionElement, ContainerElement, HeaderElement} from './styledDetails'
import {SwitchRoute} from '../routes/route'
class Details extends React.Component{
    render(){
        const routeEl = this.props.currentRoute;
        console.log('this.props.currentRoute',this.props.currentRoute)
        return(
            <SectionElement>
                <HeaderElement></HeaderElement>
                <ContainerElement>
                    <div>{routeEl}</div>
                </ContainerElement>
            </SectionElement>
        )
    }
}

export { Details }