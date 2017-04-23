export const infoPage = `import React from 'react';
import { Provider } from 'react-redux';

import myBasicStore from '<pathToStore>/store/basic/';
import App from './App';

export default function Root() {
  return (
    <Provider store={myBasicStore}>
      <App />
    </Provider>
  );
}`;

export const app = `import React from 'react';
import { connect } from 'react-redux';

import MyDataTable from './MyDataTable';

const tableStateMapper = (state, ownProps) => (
  Object.assign({}, state.myTable, ownProps)
);
const mapTableDispatch = dispatch => ({
  addRow: payload => dispatch({ type: 'ROW_ADD', payload }),
  removeRow: payload => dispatch({ type: 'ROW_REMOVE', payload })
});
const TableConnected = connect(
  tableStateMapper,
  mapTableDispatch
)(MyDataTable);


const otherTableStateMapper = ({ myOtherTable }, ownProps) => (
  Object.assign({}, myOtherTable, ownProps)
);
const mapOtherTableDispatch = dispatch => ({
  addRow: payload => dispatch({ type: 'ROW_ADD', payload, target: 'myOtherTable' }),
  removeRow: payload => dispatch({ type: 'ROW_REMOVE', payload, target: 'myOtherTable' })
});
const OtherTableConnected = connect(
  otherTableStateMapper,
  mapOtherTableDispatch
)(MyDataTable);


export default function App() {
  return (
    <div>
      <TableConnected title={'Table 1'} />
      <OtherTableConnected title={'Table 2'} />
    </div>
  );
}
`;

export const myDataTable = `import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataTable1 from '<pathToComponents>/components/data-tables/DataTable1';
import SimpleTextForm from '<pathToComponents>/components/data-forms/SimpleTextForm';

export default class MyDataTable extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    rows: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.string)
    ).isRequired,
    addRow: PropTypes.func.isRequired,
    removeRow: PropTypes.func.isRequired
  }

  handleAdd = str => this.props.addRow([str]);

  handleRemove = idx => this.props.removeRow(idx);

  render() {
    const { title, rows } = this.props;
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
}
`;
