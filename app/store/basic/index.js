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
  }
};

/**
* Helper to assign new rows to state.myTable without mutating
*/
function myTableRowReducer(state, newRows) {
  const newMyTable = Object.assign({}, state.myTable, { rows: newRows });
  const nextState = Object.assign({}, state, { myTable: newMyTable });
  return nextState;
}

/**
* Basic actions and reducers
* @param {object} state
* @param {object} action
* @return {object} newState
*/
function myBasicActionsAndReducers(state = defaultState, { type, payload }) {
  let newState;
  switch (type) {
    case 'ROW_ADD': {
      const newRow = payload;
      const newRows = [newRow, ...state.myTable.rows];
      newState = myTableRowReducer(state, newRows);
    }
      break;
    case 'ROW_REMOVE': {
      const idx = payload;
      const newRows = state.myTable.rows.filter((r, i) => (i !== idx));
      newState = myTableRowReducer(state, newRows);
    }
      break;
    default: newState = state;
      break;
  }
  return newState;
}


export default createStore(myBasicActionsAndReducers);
