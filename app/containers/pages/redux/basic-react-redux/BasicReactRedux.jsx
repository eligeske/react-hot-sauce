import React from 'react';
import Highlight from 'react-highlight';

// Non-relavent Layout Components
import {
  Panel, PanelBody, PanelFooter
} from '../../../../components/bootstrap/panel';

export default function BasicReactRedux() {
  return (
    <section>
      <h2>Basic React Redux <small>react-redux</small></h2>
      <p>A basic example of using redux to control a data table.</p>
      <p>No addons, just the minimum necessary to use redux.</p>
      <Panel>
        <PanelBody>a
        </PanelBody>
        <PanelFooter>
          <Highlight>af</Highlight>
        </PanelFooter>
        <PanelBody>
          <h3>myBasicStore.js</h3>
        </PanelBody>
        <PanelFooter>
          s
        </PanelFooter>
        <PanelBody>
          <h3>MyBasicTable.jsx</h3>
        </PanelBody>
        <PanelFooter>
          x
        </PanelFooter>
      </Panel>
    </section>
  );
}
