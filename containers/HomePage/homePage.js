import React from 'react'
import {HeaderElement, MainWrapper, MainSection} from './styled'
import { Concepts } from './Concepts'
import { Link , Route, NavLink, Switch} from 'react-router-dom'
import { letIntro } from './LetIntro';
import {SwitchRoute} from '../routes/route'

class Homepage extends React.Component{
    render(){
        console.log('home', this.props)
        return(
            <React.Fragment>
            <MainSection>
                <HeaderElement>Known Concepts</HeaderElement>
                <MainWrapper>
                    <Concepts {...this.props}/>
                    <Details></Details>
                </MainWrapper>
            </MainSection>
            </React.Fragment>
        )
    }
}

export { Homepage }