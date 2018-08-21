import { createCategory, updateCategory, destroyCategory } from '../src/components/action/category-action.js';
import reducer from '../src/components/reducer/category-reducer.js';
const defaultState = [];

describe('reducer', () => {

  it('should create a category', () => {
    let category = {name: 'Rent', budget: 1500};
    let addAction = createCategory(category);
    let state = reducer(defaultState, addAction);
    
    expect(state.length).toBe(1);
    expect(state[0].name).toBe('Rent');
    
  });

  it('should update a category', () => {
    let category = {name: 'Rent', budget: 1500};
    let addAction = createCategory(category);
    let state = reducer(defaultState, addAction);

    let updateCat = {id: state[0].id, timestamp: state[0].timestamp, name: state[0].name, budget: 1560};
    let updateAction = updateCategory(updateCat);
    let newState = reducer(state, updateAction);

    expect(newState.length).toBe(1);
    expect(newState[0].budget).toBe(1560);

  });

  it('should delete a category', () => {
    let category = {name: 'Rent', budget: 1500};
    let addAction = createCategory(category);
    let state = reducer(defaultState, addAction);

    let category2 = {name: 'Food', budget: 200};
    let addAction2 = createCategory(category2);
    let newState = reducer(state, addAction2);

    expect(newState.length).toBe(2);
    expect(newState[1].budget).toBe(200);

    let deleteCat = {id: newState[0].id, timestamp: newState[0].timestamp, name: newState[0].name, budget: newState[0].budget};
    let updateAction = destroyCategory(deleteCat);
    let delState = reducer(newState, updateAction);

    expect(delState.length).toBe(1);
    expect(delState[0].budget).toBe(200);

  });

});