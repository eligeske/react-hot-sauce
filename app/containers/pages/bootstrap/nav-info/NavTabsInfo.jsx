import React from 'react';

import { Panel, PanelBody, PanelFooter } from '../../../../components/bootstrap/panel';
import { NavTabs, NavItemText } from '../../../../components/bootstrap/nav';

const navTabsText = `import { NavTabs } from '<path to>/bootstrap/nav';

<NavTabs>
  <NavItemText active>Item</NavItemText>
  <NavItemText>Item 2</NavItemText>
</NavTabs>
`;

export default function NavTabsInfo() {
  return (
    <section>
      <h2>Tabs</h2>
      <p>NavTabs is a horizontal navigation with tab style navigation buttons/links.</p>
      <Panel>
        <PanelBody>
          <NavTabs>
            <NavItemText active>Item</NavItemText>
            <NavItemText>Item 2</NavItemText>
          </NavTabs>
        </PanelBody>
        <PanelFooter>
          <pre>
            <code>{navTabsText}</code>
          </pre>
        </PanelFooter>
      </Panel>
    </section>
  );
}
