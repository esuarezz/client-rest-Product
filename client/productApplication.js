import React from 'react';
import { render } from 'react-dom';

// Import Components
import Main from './components/Main';
import ApiService from './components/ApiService';
import ApiResponse from './components/ApiResponse';

import NotFound from './components/NotFound';


import css from './styles/style.styl';

//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//the binder between react and redux


const router = (

        <Router history={browserHistory}>
            <Route path="/" component={Main}>
            </Route>

            <Route path='*' component={NotFound} />
        </Router>

)

render(router, document.getElementById('root'));
