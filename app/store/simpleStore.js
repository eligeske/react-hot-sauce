import { createStore } from 'redux';

function rootReducer(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
export default function simpleStore() {
  // create redux store
  return createStore(rootReducer);
}
