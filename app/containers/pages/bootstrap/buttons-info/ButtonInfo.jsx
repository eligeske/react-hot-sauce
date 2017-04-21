import React from 'react';
import { classStates, sizes } from '../../../../components/bootstrap/_base/enums';
import { Panel, PanelBody, PanelFooter } from '../../../../components/bootstrap/panel';
import { Button } from '../../../../components/bootstrap/buttons';

// const navPillsText = `import { NavPills } from '<path to>/bootstrap/nav';
//
// <NavPills>
//   <NavItemText active>Item</NavItemText>
//   <NavItemText>Item 2</NavItemText>
//   // Shown active because of the route match to this url
//   <NavItemLink route={'/bootstrap/nav-info'}>Link</NavItemLink>
//   <NavItemDropdown action={'hover'} text={'Hover Me'} caret>
//     <NavItemText>Hovered to show and a caret!</NavItemText>
//   </NavItemDropdown>
//   <NavItemDropdown action={'hover'} text={'Hover Me'}>
//     <NavItemText>Hovered to show! no caret :(</NavItemText>
//   </NavItemDropdown>
//   <NavItemDropdown text={'Click Me'}>
//     <NavItemText>Clicked to show!</NavItemText>
//   </NavItemDropdown>
// </NavPills>
// `;

const components = [];
const btnStates = ['default', ...classStates];
const btnSizes = sizes;
btnSizes.forEach((size) => {
  const buttons = [];
  btnStates.forEach((state) => {
    buttons.push(<Button size={size} key={`${state}:${size}`} type={state}>{state} ({size})</Button>);
  });
  components.push(<div style={{ padding: '5px' }} key={size}>{buttons}</div>);
});

export default function ButtonInfo() {
  return (
    <section>
      <h2>Button</h2>
      <p>... add copy</p>
      <Panel>
        <PanelBody>
          {components}
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
