import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';

import rootreducer from './rootReducer';

export const store = createStore(
	rootreducer,
	applyMiddleware( logger, apiMiddleware ),
);