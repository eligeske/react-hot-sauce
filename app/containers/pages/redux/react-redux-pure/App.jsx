import React from 'react';
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
