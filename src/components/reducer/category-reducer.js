import uuid from 'uuid/v1';
import defaultState from './default-state.js';

// Actions
export const CATEGORY_CREATE = 'Category/ADD';
export const CATEGORY_UPDATE = 'Category/UPDATE';
export const CATEGORY_DESTROY = 'Category/DELETE';

export default function reducer(state = defaultState, action) {

  const { type, payload } = action;
  
  switch (type) {
  case CATEGORY_CREATE:
    payload.id = uuid();
    payload.timestamp = new Date().getTime();
  
    return {
      ...state,
      categories: [...state.categories, payload]
};
  
  case CATEGORY_UPDATE:
    return {
    ...state, 
    categories: state.categories.map(category => category.id === payload.id ? payload : category)};
  
  case CATEGORY_DESTROY:
    return {
    ...state, 
    categories: state.categories.filter(category => category.id !== payload.id)};
  
  default: return state;
  }
}