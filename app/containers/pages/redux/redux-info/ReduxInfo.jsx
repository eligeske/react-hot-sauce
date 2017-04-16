import React from 'react';
import {
  Panel, PanelBody, PanelFooter
} from '../../../../components/bootstrap/panel';

export default function ReduxInfo() {
  return (
    <section>
      <h2>Redux</h2>
      <p>... add copy</p>
      <Panel>
        <PanelBody>
          {'redux example'}
        </PanelBody>
        <PanelFooter>
          <pre>
            <code>{''}</code>
          </pre>
        </PanelFooter>
      </Panel>
    </section>
  );
}
