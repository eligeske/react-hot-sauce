import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataTable1 from '../../../../components/data-tables/DataTable1';
import SimpleTextForm from '../../../../components/data-forms/SimpleTextForm';

export default class MyBasicTable extends Component {
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
      payload: idx // our row is an array of strings
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
          headers={['Header']}
          rows={rows}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}
