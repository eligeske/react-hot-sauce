import React from 'react';

import { Panel, PanelBody, PanelFooter } from '../../../../components/bootstrap/panel';
import { NavStackedPills, NavItemText } from '../../../../components/bootstrap/nav';

const navStackPillsText = `import { NavStackPills } from '<path to>/bootstrap/nav';

<NavStackPills>
  <NavItemText active>Item</NavItemText>
  <NavItemText>Item 2</NavItemText>
</NavStackPills>
`;

export default function NavStackPillsInfo() {
  return (
    <section>
      <h2>Stacked Pills</h2>
      <p>NavStackedPills is a vertical navigation with pill style navigation buttons/links.</p>
      <Panel>
        <PanelBody>
          <NavStackedPills>
            <NavItemText active>Item</NavItemText>
            <NavItemText>Item 2</NavItemText>
          </NavStackedPills>
        </PanelBody>
        <PanelFooter>
          <pre>
            <code>{navStackPillsText}</code>
          </pre>
        </PanelFooter>
      </Panel>
    </section>
  );
}
