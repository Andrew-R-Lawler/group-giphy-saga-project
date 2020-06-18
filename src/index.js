import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';

function* watcherSaga(){
    yield console.log('in watcherSaga');
    yield 
    
}

const gifReducer = (state='', action) => {
    switch (action.type)
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        gifReducer
    }),
    applyMiddleware( sagaMiddleware, logger ),
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
