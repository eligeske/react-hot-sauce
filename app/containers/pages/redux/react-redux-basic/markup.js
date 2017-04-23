export const infoPage = `import React from 'react';
import { Provider } from 'react-redux';

import myBasicStore from '<pathToStore>/store/basic/';
import MyPretendApp from './MyPretendApp';

export default function Root() {
  return (
    <Provider store={myBasicStore}>
      <MyPretendApp />
    </Provider>
  );
}`;

export const myPretendApp = `import React from 'react';

import MyConnectedTable from './MyConnectedTable';

export default function MyPretendApp() {
  return <MyConnectedTable title={'Some table title'} />;
}`;

export const myConnectedTable = `class MyConnectedTable extends Component {
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

const mapStateToProps = (state, ownProps) => Object.assign({}, state.myTable, ownProps);

const mapDispatchToProps = dispatch => ({
  addRow: payload => dispatch({ type: 'ROW_ADD', payload }),
  removeRow: payload => dispatch({ type: 'ROW_REMOVE', payload })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyConnectedTable);`;
