import React from 'react'
import { Link , Route, NavLink, Switch} from 'react-router-dom'
import {MainSection} from './styled'
class Concepts extends React.Component{
    
    constructor(){
        super();
        this.state = {
            reactConcepts: [
                {'topic': 'Let'},
                {'topic': 'const'},
                {'topic': 'spread operator'},
                {'topic': 'rest operator'},
                {'topic': 'renderprops'},
                {'topic': 'state'},
                {'topic': 'props'},
                {'topic': 'styled-components'},
                {'topic': 'Routing'},

            ]
        }

    }

    render()
    {
        const stateConcept= this.state.reactConcepts
        const conceptStack = stateConcept.map((t, i) =>
            <Link key={'topic'+i} to={t.topic}>{t.topic}</Link>
        )
        return(
            <MainSection>
                <ul>{conceptStack}</ul>
            </MainSection>
        )
    }
}

export { Concepts }