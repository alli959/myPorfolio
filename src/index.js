import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

class StateLoader {

    loadState() {
        try {
            let serializedState = localStorage.getItem("state");

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("state", serializedState);

        }
        catch (err) {
        }
    }

    initializeState() {
        console.log("init");
        return {
            Project: {
                title: "test",
                about: "test",
                tools: "test"
                

              },

            }
        };
    }


    const stateLoader = new StateLoader();



const store = createStore(reducer, stateLoader.loadState() ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


    store.subscribe(() => {
        stateLoader.saveState(store.getState());
    }); 

ReactDOM.render(
    <Provider store = {store}>

    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>,
 document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
