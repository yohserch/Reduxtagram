import { createStore, compose } from 'redux';

import { syncHistoryWithStore } from 'react-router-redux';

import { browserHistory } from 'react-router';

// import the root reducer

import rootReducer from './reducers/index'

import comments from './data/comments'
import post from './data/posts'

// crate an object fro the default data

const defaultState = {
	post,
	comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;