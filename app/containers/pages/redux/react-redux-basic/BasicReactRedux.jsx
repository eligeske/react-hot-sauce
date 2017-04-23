import React from 'react';
import { Provider } from 'react-redux';

import myBasicStore from '../../../../store/basic/';

import CodeJS from '../../../../components/code-highlight/CodeJS';

// Non-relavent Layout Components
import {
  Panel, PanelBody, PanelFooter
} from '../../../../components/bootstrap/panel';

import MyPretendApp from './MyPretendApp';

import { infoPage, myPretendApp, myConnectedTable } from './markup';

export default function BasicReactRedux() {
  return (
    <section>
      <h2>Basic React Redux <small>react-redux</small></h2>
      <p>React Redux (react-redux) is a set of tools to take out some of the
      repetition you may encounter. It provides a way to assign the <b>store</b>
       once to alleviate the need to pass down to each component and helpers to map state
      and dispatch methods.</p>
      <p>The <b>{'<Provider>'}</b> wrapper component assigns your redux store to the context to all its child
      components and exposes it to the other react-redux helper methods like <b>{'connect()'}</b></p>
      <p>The <b>{'connect()'}</b> method is used to make a component {'"Connected"'} to redux.
       {'"Connected"'} in the way of mapping the state and dispatch methods to that {'"connected"'}
        component&apos;s props. This does the subscribing and the {'"getState()"'} from redux
        for you.</p>
      <p>Basic usage of {'"connect()"'} can be achieved with two params; {"'mapStateToProps'"},
         {"'mapDispatchToProps'"}.
        The <b>{'"mapStateToProps"'}</b> is a nullable parameter if your connected component does not need
        to listen for state change. The <b>{'"mapDispatchToProps"'}</b> is a little more special.
         It can take either a plain object or a function.
         When passing a object it expects a certain structure
          which we will cover later.
         For our example we&apos;ll focus on passing a function.
      </p>
      <p>This basic example of using react-redux to control the same data table from the
      basic redux example.</p>
      <p>No addons, just the minimum necessary to use react-redux.</p>

      <Panel>
        <PanelBody>
          <Provider store={myBasicStore}>
            <MyPretendApp />
          </Provider>
        </PanelBody>
        <PanelBody>
          <h3>Root.jsx</h3>
          <p>Wrap the main app component with <b>{'<Provider>'}</b> to inject
          the store into context for the connect methods to gain access.</p>
        </PanelBody>
        <PanelFooter>
          <CodeJS>{infoPage}</CodeJS>
        </PanelFooter>
        <PanelBody>
          <h3>MyPretendApp.jsx</h3>
          <p>The wrapped app where we can call in the other components  with or without
          being <b>{'"connected"'}</b></p>
        </PanelBody>
        <PanelFooter>
          <CodeJS>{myPretendApp}</CodeJS>
        </PanelFooter>
        <PanelBody>
          <h3>MyConnectedTable.jsx</h3>
        </PanelBody>
        <PanelFooter>
          <CodeJS>{myConnectedTable}</CodeJS>
        </PanelFooter>
      </Panel>
    </section>
  );
}
