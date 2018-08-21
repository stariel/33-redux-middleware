const EXPENSE_CREATE = 'Expense/ADD';
const EXPENSE_UPDATE = 'Expense/UPDATE';
const EXPENSE_DELETE = 'Expense/DELETE';

export function createExpense(expense) {
  return {
    type: EXPENSE_CREATE,
    payload: expense,
  };
}

export function updateExpense(expense) {
  return {
    type: EXPENSE_UPDATE,
    payload: expense,
  };
}

export function destroyExpense(expense) {
  return {
    type: EXPENSE_DELETE,
    payload: expense,
  };
}