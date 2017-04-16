import React from 'react';

import { Panel, PanelBody, PanelFooter } from '../../../../components/bootstrap/panel';
import { ContainerFluid } from '../../../../components/bootstrap/layout';
import {
  NavItemLink, NavItemDropdown, NavItemText
} from '../../../../components/bootstrap/nav';
import {
  Navbar, NavbarNav, NavbarBrandLink, NavbarNavRight, NavbarMobileCollapse
} from '../../../../components/bootstrap/navbar';

const navbarText = `import { NavItemLink, NavItemDropdown, NavItemText } from '<path to>/bootstrap/nav';
import {
  Navbar, NavbarNav, NavbarBrandLink, NavbarNavRight, NavbarMobileCollapse
} from '<path to>/bootstrap/navbar';

<Navbar type={'inverse'}>
  <ContainerFluid>
    <NavbarBrandLink router="/">Brand</<NavbarBrandLink>
    <NavbarMobileCollapse>
      <NavbarNav>
        <NavItemLink route="/link">Link</NavItemLink>
        <NavItemDropdown text={'Link 2'} action={'hover'}>
          <NavItemLink route="/link2/one">One</NavItemLink>
          <NavItemLink route="/link2/two">Two</NavItemLink>
        </NavItemDropdown>
      </NavbarNav>
      <NavbarNavRight>
        <NavItemText>Here is some text</NavItemText>
        <NavItemText><span className="glyphicon glyphicon-off" /></NavItemText>
      </NavbarNavRight>
    </NavbarMobileCollapse>
  </ContainerFluid>
</Navbar>
`;

export default function NavbarInfo() {
  const routePath = '/bootstrap/navbars-info';
  return (
    <section>
      <h2>Navbar</h2>
      <p>... add copy</p>
      <Panel>
        <PanelBody>
          <Navbar type={'inverse'}>
            <ContainerFluid>
              <NavbarBrandLink route={routePath}>Brand</NavbarBrandLink>
              <NavbarMobileCollapse>
                <NavbarNav>
                  <NavItemLink route={routePath}>Link</NavItemLink>
                  <NavItemDropdown text={'Link 2'} action={'hover'}>
                    <NavItemLink href={'/'}>One</NavItemLink>
                    <NavItemLink href={'/'}>Two</NavItemLink>
                  </NavItemDropdown>
                </NavbarNav>
                <NavbarNavRight>
                  <NavItemText>Here is some text</NavItemText>
                  <NavItemText><span className="glyphicon glyphicon-off" /></NavItemText>
                </NavbarNavRight>
              </NavbarMobileCollapse>
            </ContainerFluid>
          </Navbar>
        </PanelBody>
        <PanelFooter>
          <pre>
            <code>{navbarText}</code>
          </pre>
        </PanelFooter>
      </Panel>
    </section>
  );
}
