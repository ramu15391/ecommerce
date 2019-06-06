import React from 'react'
import { letIntro, constIntro} from "../page/ConceptsList/conceptJson";
import {Route, Switch} from 'react-router-dom'
import {Details} from '../page/ConceptDetailsPage/Details'
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
    },
    {
        component: '',
        exact: true,
        path:''
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