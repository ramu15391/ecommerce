import React from 'react'
import { letIntro } from "../HomePage/LetIntro";
import {Route, Switch} from 'react-router-dom'

const routingList = [
    {
        component: letIntro,
        exact: true,
        path:'/let'
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
                <div>
                    {currentRoute}
                </div>
        )
    }
}

export { SwitchRoute }