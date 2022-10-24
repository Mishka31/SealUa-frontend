import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { githubApi } from './github/github';
// import rootReducer from './reducers';

const rootReducer = combineReducers({
  [githubApi.reducerPath]: githubApi.reducer,
});

export const store = configureStore({ reducer: rootReducer, devTools: process.env.NODE_ENV === 'development' });
