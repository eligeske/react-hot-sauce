import React from 'react';
import { Provider } from 'react-redux';

import CodeJS from '../../../../components/code-highlight/CodeJS';

// Non-relavent Layout Components
import {
  Panel, PanelBody, PanelFooter
} from '../../../../components/bootstrap/panel';

// Imports for Example
import myBasicStore from '../../../../store/basic/';
import App from './App';

import { infoPage, app, myDataTable } from './markup';

export default function PureReactRedux() {
  return (
    <section>
      <h2>Pure React Redux</h2>
      <p>When using react-redux connect, there is a 4th optional parameter of an options object.
      These options allow you to override the default behavior of react-redux.</p>
      <p>As you may have guessed one of those options is the <b>{'"pure"'}</b> property. By default
      this is set to <b>true</b>. </p>
      <p>Below we have two connected data tables. Both of these data tables are using the
      same redux store and parent state. But inside each of their mapStateToProps we only return
      the state data in concern for each data table. With the pure option set to true the connected
      component will not re-render if the state data returned from the mapStateToProps has
      not changed.</p>

      <Panel>
        <PanelBody>
          <Provider store={myBasicStore}>
            <App />
          </Provider>
        </PanelBody>
        <PanelBody>
          <h3>Root.jsx</h3>
        </PanelBody>
        <PanelFooter>
          <CodeJS>{infoPage}</CodeJS>
        </PanelFooter>
        <PanelBody>
          <h3>App.jsx</h3>
        </PanelBody>
        <PanelFooter>
          <CodeJS>{app}</CodeJS>
        </PanelFooter>
        <PanelBody>
          <h3>MyDataTable.jsx</h3>
        </PanelBody>
        <PanelFooter>
          <CodeJS>{myDataTable}</CodeJS>
        </PanelFooter>
      </Panel>
    </section>
  );
}
