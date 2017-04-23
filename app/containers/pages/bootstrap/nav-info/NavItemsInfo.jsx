import React from 'react';

import { Panel, PanelBody, PanelFooter } from '../../../../components/bootstrap/panel';
import {
  NavPills, NavItemText, NavItemLink, NavItemDropdown
} from '../../../../components/bootstrap/nav';
import {
  Table, TableBody, TableRow, TableCol, TableColH
} from '../../../../components/bootstrap/table';

const navPillsText = `import {
  NavPills, NavItemText, NavItemLink, NavItemDropdown
} from '<path to>/bootstrap/nav';

<NavPills>
  <NavItemText active>Active Prop</NavItemText>
  <NavItemText>Item 2</NavItemText>
  // Shown active because of the route match to this url
  <NavItemLink route={'/bootstrap/nav-info'}>Active Route</NavItemLink>
  <NavItemDropdown action={'hover'} text={'Hover Me'} caret>
    <NavItemText>Hovered to show and a caret!</NavItemText>
  </NavItemDropdown>
  <NavItemDropdown action={'hover'} text={'Hover Me'}>
    <NavItemText>Hovered to show! no caret :(</NavItemText>
  </NavItemDropdown>
  <NavItemDropdown text={'Click Me'}>
    <NavItemText>Clicked to show!</NavItemText>
  </NavItemDropdown>
</NavPills>
`;

export default function NavItemsInfo() {
  return (
    <section>
      <h2>Nav Items</h2>
      <p>Our navs consist of items like links, text or dropdowns with support of
      react-router-dom v4</p>
      <p>Below is an example of all nav item types shown.</p>
      <Panel>
        <PanelBody>
          <NavPills>
            <NavItemText active>Active Prop</NavItemText>
            <NavItemText>Item 2</NavItemText>
            <NavItemLink route={'/bootstrap/nav-info'}>Active Route</NavItemLink>
            <NavItemDropdown action={'hover'} text={'Hover Me'} caret>
              <NavItemText>Hovered to show and a caret!</NavItemText>
            </NavItemDropdown>
            <NavItemDropdown action={'hover'} text={'Hover Me'}>
              <NavItemText>Hovered to show! no caret :(</NavItemText>
            </NavItemDropdown>
            <NavItemDropdown text={'Click Me'}>
              <NavItemText>Clicked to show!</NavItemText>
            </NavItemDropdown>
          </NavPills>
        </PanelBody>
        <PanelFooter>
          <pre>
            <code>{navPillsText}</code>
          </pre>
        </PanelFooter>
        <Table bordered>
          <TableBody>
            <TableRow>
              <TableColH colSpan="3">{'<NavItemText className="my-pretty-color">Text</NavItemText>'}</TableColH>
            </TableRow>
            <TableRow>
              <TableCol>className</TableCol>
              <TableCol>optional</TableCol>
              <TableCol><p>Adds an additional css class to the {'<li>'}</p></TableCol>
            </TableRow>

            <TableRow>
              <TableColH colSpan="3">
                {'<NavItemLink href="/to/mypage">normal dom link</NavItemLink>'}
                <br /> or <br />
                {'<NavItemLink route="/to/mypage">react-router link</NavItemLink>'}
              </TableColH>
            </TableRow>
            <TableRow>
              <TableCol>className</TableCol>
              <TableCol>optional</TableCol>
              <TableCol><p>Adds an additional css class to the {'<li>'}</p></TableCol>
            </TableRow>

            <TableRow>
              <TableColH colSpan="3">
                {'<NavItemDropdown text="Hello" action="hover" activeOnPath="/mypage"> ...nav items </NavItemDropdown>'}
              </TableColH>
            </TableRow>
            <TableRow>
              <TableCol>className</TableCol>
              <TableCol>optional</TableCol>
              <TableCol><p>Adds an additional css class to the {'<li>'}</p></TableCol>
            </TableRow>
            <TableRow>
              <TableCol>text</TableCol>
              <TableCol>optional</TableCol>
              <TableCol><p>Adds this is the main {'<a>'} text for the dropdown</p></TableCol>
            </TableRow>
            <TableRow>
              <TableCol>action</TableCol>
              <TableCol>optional {'(default is "click")'}</TableCol>
              <TableCol>
                <p>Either <b>click</b> or <b>hover</b>.
                  Determines the action for expanding</p>
              </TableCol>
            </TableRow>
            <TableRow>
              <TableCol>route</TableCol>
              <TableCol>optional (hover only)</TableCol>
              <TableCol><p>When clicked navigates to passed route</p></TableCol>
            </TableRow>
            <TableRow>
              <TableCol>activeOnPath</TableCol>
              <TableCol>optional</TableCol>
              <TableCol><p>If a partial match is found in the page location, it will set it to {'.active'}</p></TableCol>
            </TableRow>
          </TableBody>
        </Table>
      </Panel>
    </section>
  );
}
