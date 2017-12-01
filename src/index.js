import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reducers from './reducers/index'
import registerServiceWorker from './js/registerServiceWorker';
import {
    createStore
} from 'redux'
import {
    Provider
} from 'react-redux';

const store = createStore(reducers, {})

function renderPage() {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}
renderPage()

registerServiceWorker();