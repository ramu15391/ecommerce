import React from 'react'
import {HeaderElement, MainWrapper, MainSection} from './styled'
import { Concepts } from './Concepts'

class Homepage extends React.Component{
    render(){
        return(
            <React.Fragment>
            <MainSection>
                <HeaderElement>Known Concepts</HeaderElement>
                <MainWrapper>
                    <Concepts></Concepts>
                </MainWrapper>
            </MainSection>
            </React.Fragment>
        )
    }
}

export { Homepage }