
import { createStore, combineReducers, applyMiddleware } from 'redux';
import categoryState from './category-reducer.js';
import expenseState from './expense-reducer.js';

import logger from '../middleware/logger.js';

const rootReducer = combineReducers({
  categoryState,
  expenseState,
});

export default createStore(rootReducer, applyMiddleware(logger));