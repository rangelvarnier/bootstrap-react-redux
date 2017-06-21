import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import registerServiceWorker from './serviceWorker/registerServiceWorker';
import './index.css';
import App from './App';
import Login from './components/login/Login';
import PageNotFound from './components/pages/PageNotFound';
import store from './store/registerStores';

function verifyAuthentication(nextState, replace) {}
ReactDOM.render((
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route exact path="/" component={App} onEnter={verifyAuthentication}/>
                <Route path="*" component={PageNotFound}/>
            </Switch>
        </Router>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
