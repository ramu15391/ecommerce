import React from 'react'
import {HeaderElement, MainWrapper, MainSection} from './styled'
import { Concepts } from './Concepts'
import { Link , Route, NavLink, Switch} from 'react-router-dom'
import { letIntro } from './LetIntro';
class Homepage extends React.Component{
    render(){
        return(
            <React.Fragment>
            <MainSection>
                <HeaderElement>Known Concepts</HeaderElement>
                <MainWrapper>
                    <Concepts></Concepts>
                    <Details></Details>
                </MainWrapper>
            </MainSection>
            <Route path='/let' component={letIntro}/>
            </React.Fragment>
        )
    }
}

export { Homepage }