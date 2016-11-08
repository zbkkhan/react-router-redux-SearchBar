import React from 'react';
import ReactRouter from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import App from '../components/App'
import AutoFillLogic from '../containers/AutoFillLogic'
import SearchBar from '../containers/SearchBar';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import store, { history } from './store'
import { Provider } from 'react-redux'


let routes =(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={Main}>
                <IndexRoute component={Home}/>
                <Route path='searchbar' component={App}>
                </Route>
            </Route>
        </Router>
    </Provider>

)


export default routes;