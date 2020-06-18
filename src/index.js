import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddle } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';

function* watcherSaga(){
    yield console.log('in watcherSaga');
    
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({

    }),
    applyMiddleware( sagaMiddleware, logger ),
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<App />, document.getElementById('react-root'));
