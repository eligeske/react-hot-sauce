import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import DataTable1 from '../../../../components/data-tables/DataTable1';
import SimpleTextForm from '../../../../components/data-forms/SimpleTextForm';

class MyConnectedTable extends Component {
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
          headers={['Header']}
          rows={rows}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, state.myTable, ownProps);

const mapDispatchToProps = dispatch => ({
  addRow: payload => dispatch({ type: 'ROW_ADD', payload }),
  removeRow: payload => dispatch({ type: 'ROW_REMOVE', payload })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyConnectedTable);
