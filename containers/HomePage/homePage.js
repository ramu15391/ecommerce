import React from 'react'
import {HeaderElement, MainWrapper, MainSection} from './styled'
import { Concepts } from '../ConceptsList/ConceptsList'
import { Link , Route, NavLink, Switch} from 'react-router-dom'
import {Details} from '../ConceptDetailsPage/Details'
import {SwitchRoute} from '../routes/route'
class Homepage extends React.Component{
    render(){
        console.log('home', this.props)
        return(
            <React.Fragment>
            <MainSection>
                <HeaderElement>Known Concepts</HeaderElement>
                <MainWrapper>
                    <Link to='/concepts'>Concepts</Link>
                    <Route path='/concepts' component={Concepts}/>
                    <SwitchRoute/>
                </MainWrapper>
            </MainSection>
            </React.Fragment>
        )
    }
}

export { Homepage }