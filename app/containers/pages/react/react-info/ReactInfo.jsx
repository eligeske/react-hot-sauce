import React from 'react';
import CodeJS from '../../../../components/code-highlight/CodeJS';
import {
  Panel, PanelBody, PanelFooter
} from '../../../../components/bootstrap/panel';

export default function ReactRouterDOMInfo() {
  return (
    <div className="code-page">
      <h1>React</h1>
      <p>...todo</p>
      <section>
        <Panel>
          <PanelBody>
            <p>
              add copy
            </p>
          </PanelBody>
          <PanelFooter>
            <CodeJS>
              {`// TODO`}
            </CodeJS>
          </PanelFooter>
        </Panel>
      </section>
    </div>
  );
}
