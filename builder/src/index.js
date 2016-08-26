import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css'
import './css/app.css'
import './css/helper.css'
import './css/form.css'

import React from 'react'
import {render} from 'react-dom'
import {Router, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore();

const rootRoute = {
    childRoutes: [
        {
            path: '/',
            component: require('./components/App'),
            indexRoute: {
                component: require('./routes/Dashboard/Dashboard')
            },
            childRoutes: [
                require('./routes/Home')
            ]
        }
    ]
};

render((
    <Provider store={store}>
        <Router history={hashHistory} routes={rootRoute}/>
    </Provider>
), document.getElementById('root'));
