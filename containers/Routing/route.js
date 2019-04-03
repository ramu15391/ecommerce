import React from 'react';

const routeConfig = [
    {
        path: '/',
        component: 'Home',
        exact: true
    },
    {
        path: '/let',
        component: 'LetIntro',
        exact: true
    },
    {
        path: '/const',
        component: 'constIntro',
        exact: true
    },
    {
        path: '/link',
        component: 'RoutingLink',
        exact: true
    },
    {
        path: '/route',
        component: 'RouteComponent',
        exact: true
    },
    {
        path: '/git',
        component: 'Git',
        exact: true
    },
    {
        path: '/webpack',
        component: 'Webpack',
        exact: true
    },
    {
        path: '/package',
        component: 'Package',
        exact: true
    },
]
export { routeConfig }