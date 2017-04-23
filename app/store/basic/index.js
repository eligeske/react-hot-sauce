import { createStore } from 'redux';


/**
* Default basic application state structure
* This is nice to have to show what the state looks like
* and to pass in when the app first starts
*/
const defaultState = {
  myTable: {
    title: 'My Table!',
    rows: []
  },
  myOtherTable: {
    title: 'my other table',
    rows: [['one'], ['tow']]
  }
};

/**
* Basic actions and reducers
* @param {object} state
* @param {object} action
* @return {object} newState
*/
function myBasicActionsAndReducers(state = defaultState, { type, payload, target }) {
  const tableName = target || 'myTable';
  const nextState = Object.assign({}, state);

  switch (type) {
    case 'ROW_ADD': {
      const newRow = payload;
      const newRows = [newRow, ...state[tableName].rows];
      nextState[tableName].rows = newRows;
    }
      break;
    case 'ROW_REMOVE': {
      const idx = payload;
      const newRows = state[tableName].rows.filter((r, i) => (i !== idx));
      nextState[tableName].rows = [...newRows];
    }
      break;
    default: break;
  }
  return nextState;
}


export default createStore(myBasicActionsAndReducers);
