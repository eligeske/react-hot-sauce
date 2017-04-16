import React from 'react';

import { Panel, PanelBody, PanelFooter } from '../../../../components/bootstrap/panel';
import { NavPills, NavItemText } from '../../../../components/bootstrap/nav';

const navPillsText = `import { NavPills } from '<path to>/bootstrap/nav';

<NavPills>
  <NavItemText active>Item</NavItemText>
  <NavItemText>Item 2</NavItemText>
</NavPills>
`;

export default function NavPillsInfo() {
  return (
    <section>
      <h2>Pills</h2>
      <p>NavPills is a horizontal navigation with pill style navigation buttons/links.</p>
      <Panel>
        <PanelBody>
          <NavPills>
            <NavItemText active>Item</NavItemText>
            <NavItemText>Item 2</NavItemText>
          </NavPills>
        </PanelBody>
        <PanelFooter>
          <pre>
            <code>{navPillsText}</code>
          </pre>
        </PanelFooter>
      </Panel>
    </section>
  );
}
