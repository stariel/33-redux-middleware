export default  store => next => action => {
  console.log('Current State: ', store.getState());
  console.log('Action type: ', action.type);
  let result = next(action);
  console.log('New State: ', store.getState());
  return result;
};