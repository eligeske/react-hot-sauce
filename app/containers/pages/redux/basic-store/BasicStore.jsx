import React, { Component } from 'react';
import CodeJS from '../../../../components/code-highlight/CodeJS';

// Non-relavent Layout Components
import {
  Panel, PanelBody, PanelFooter
} from '../../../../components/bootstrap/panel';

// Imports for Example
import myBasicStore from '../../../../store/basic/';
import MyBasicTable from './MyBasicTable';

export default class BasicStore extends Component {

  constructor(props) {
    super(props);
    this.state = myBasicStore.getState();
  }

  componentDidMount() {
    this.unsubscribe = myBasicStore.subscribe(() => this.storeUpdated());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  storeUpdated() {
    this.setState(myBasicStore.getState());
  }

  render() {
    return (
      <section>
        <h2>Basic Redux Store</h2>
        <p>A basic example of using redux to control a data table.</p>
        <p>No addons, just the minimum necessary to use redux.</p>
        <Panel>
          <PanelBody>
            <MyBasicTable store={myBasicStore} myTable={this.state.myTable} />
          </PanelBody>
          <PanelFooter>
            <CodeJS>{`import React, { Component } from 'react';

import myBasicStore from './store/basic/myBasicStore';
import MyBasicTable from './MyBasicTable';

export default class BasicStoreExample extends Component {
  constructor(props) {
    super(props);
    this.state = myBasicStore.getState();
  }

  componentDidMount() {
    this.unsubscribe = myBasicStore.subscribe(() => this.storeUpdated());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  storeUpdated() {
    this.setState(myBasicStore.getState());
  }

  render() {
    return (
      <MyBasicTable store={myBasicStore} myTable={this.state.myTable} />
    );
  }
}`}</CodeJS>
          </PanelFooter>
          <PanelBody>
            <h3>myBasicStore.js</h3>
          </PanelBody>
          <PanelFooter>
            <CodeJS>{`import { createStore } from 'redux';

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


export default createStore(myBasicActionsAndReducers);`}</CodeJS>
          </PanelFooter>
          <PanelBody>
            <h3>MyBasicTable.jsx</h3>
          </PanelBody>
          <PanelFooter>
            <CodeJS>{`export default class MyBasicTable extends Component {
  static propTypes = {
    store: PropTypes.shape({
      getState: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired
    }).isRequired
  }

  handleAdd = (row) => {
    this.props.store.dispatch({
      type: 'ROW_ADD',
      payload: [row] // our row is an array of strings
    });
  }
  handleRemove = (idx) => {
    this.props.store.dispatch({
      type: 'ROW_REMOVE',
      payload: idx
    });
  }

  render() {
    const { title, rows } = this.props.myTable;
    return (
      <div>
        <SimpleTextForm
          placeholderText={'New Row'}
          buttonText={'Add +'}
          onSubmit={this.handleAdd}
        />
        <DataTable1
          title={title}
          headers={['Hello']}
          rows={rows}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}`}</CodeJS>
          </PanelFooter>
        </Panel>
      </section>
    );
  }
}
