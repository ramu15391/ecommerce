import React from 'react'

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
        const conceptStack = stateConcept.map((t) =>
            <li>{t.topic}</li>
            //console.log('conceptStack',t.topic)
        )
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) =>
        <li>{number}</li>
        );
        console.log('conceptStack',conceptStack)
        return(
            <ul>{conceptStack}</ul>
        )
    }
}

export { Concepts }