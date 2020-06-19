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
    yield takeEvery('GET_FAVORITES', getFavorites)
    yield takeEvery('POST_GIF', postGif)
    yield takeEvery('ADD_CATEGORY', addCategory)
}



function* addCategory (action) {
    try
    {
        yield axios.put(`/api/favorite/:${action.payload.id}`, action.payload.category)
        yield put({ type: 'GET_FAVORITES' })
    } catch (error) {
        console.log('FAILED POST:', error)
    }
}




function* postGif (action) {
    try {
        console.log('POST request data:', action.payload)
        yield axios.post(`/api/favorite`, {url: action.payload})
        yield put({ type: 'GET_FAVORITES' })
    } catch (error) {
        console.log('FAILED POST:', error)
    }
}

function* getFavorites (action) {
    try {
        const favorites = yield axios.get(`/api/favorite`)
        console.log(favorites)
        yield put({ type: 'SET_FAVORITES', payload: favorites.data })
    } catch (error) {
        console.log('FAILED POST:', error)
    }
}

function* getSearch (action) {
    try {
        const searchQuery = action.payload
        console.log('search query', searchQuery);
        const searchResults = yield axios.get(`/search/:${searchQuery.newSearch}`)
        yield put({type: 'SET_SEARCH', payload: searchResults.data})
    }   catch (error) {
        console.log('FAILED GET:', error)
    }
}

const favoriteReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_FAVORITES':
            return action.payload
        default:
            return state
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
        gifReducer,
        favoriteReducer
    }),
    applyMiddleware( sagaMiddleware, logger ),
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
