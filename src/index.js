import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './js/registerServiceWorker';
import {
    createStore
} from 'redux'
import {
    Provider
} from 'react-redux';
const reducers = (state, action) => {
    switch (action.type) {
        case "ADD":
            var newS = Object.assign({}, state);
            newS.list.push(action.payload);
            return newS
        default:
            return state
    }
}
const store = createStore(reducers, {
    list: []
})

function renderPage() {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}
renderPage()
store.subscribe(renderPage)
registerServiceWorker();