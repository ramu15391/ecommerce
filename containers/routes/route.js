import React from 'react'
import { letIntro, constIntro } from "../Concepts/conceptJson";
import {Route, Switch} from 'react-router-dom'
import {Details} from '../ConceptDetails/Details'
const routingList = [
    {
        component: letIntro,
        exact: true,
        path:'/let'
    },
    {
        component: constIntro,
        exact: true,
        path:'/const'
    },
    {
        component: letIntro,
        exact: true,
        path:'/l'
    },
    {
        component: letIntro,
        exact: true,
        path:'/l'
    }
]

class SwitchRoute extends React.Component{
    render()
    {
        console.log('******', location.pathname)
        console.log(this.props)
        const currentRoute = routingList.map((route,i) =>
           <Route key={i} path={route.path} component={route.component}/>
        )
        console.log('route',currentRoute)
        return(
                <Details currentRoute= {currentRoute}/>
        )
    }
}

export { SwitchRoute }