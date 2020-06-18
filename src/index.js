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
    yield takeEvery('GET_SEARCH', getSearch)
}


function* getSearch (action) {
    try {
       const searchResults = yield axios.get(`/search/${action.payload}`)
       yield put({type: 'SET_SEARCH', payload: searchResults.data})
    } catch (error) {
        console.log('FAILED GET:', error)
    }
}

const gifReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return action.payload
        default:
            return state
    }
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
