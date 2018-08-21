import uuid from 'uuid/v1';
import defaultState from './default-state.js';

// Actions
export const EXPENSE_CREATE = 'Expense/ADD';
export const EXPENSE_UPDATE = 'Expense/UPDATE';
export const EXPENSE_DELETE = 'Expense/DELETE';

export default function reducer(state = defaultState, action) {

  const { type, payload } = action;
  
  switch (type) {
  case EXPENSE_CREATE:
    payload.id = uuid();
    payload.categoryID = '';
    payload.timestamp = new Date().getTime();
  
    return {
        ...state,
        expenses: [...state.expenses, payload]
};
  
  case EXPENSE_UPDATE:
    return {
      ...state,
      expenses: [ state.expenses.map(expense => expense.id === payload.id ? payload : expense)]
      };
  
  case EXPENSE_DELETE:
    return {
      ...state,
      expenses: [ state.expenses.filter(expense => expense.id !== payload.id)]
      };
  
  default: return state;
  }
}