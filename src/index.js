import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './serviceWorker/registerServiceWorker';
import './index.css';
import App from './App';
import store from './store/registerStores';

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
