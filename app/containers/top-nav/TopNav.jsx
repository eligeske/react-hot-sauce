import React from 'react';
import { ContainerFluid } from '../../components/bootstrap/layout';
import {
  NavbarFixedTop, NavbarBrandLink,
  NavbarMobileCollapse,
  NavbarNav, NavbarNavRight
} from '../../components/bootstrap/navbar';
import { NavItemText, NavItemLink, NavItemDropdown } from '../../components/bootstrap/nav';

import './topNav.less';

export default function TopNav() {
  return (
    <NavbarFixedTop className="top-nav">
      <ContainerFluid>
        <NavbarBrandLink route="/">Hot Sauce</NavbarBrandLink>
        <NavbarMobileCollapse>
          <NavbarNav>
            <NavItemLink route="/area1">Area 1</NavItemLink>
            <NavItemDropdown text={'Area 2 click'}>
              <NavItemLink route="/area2/one">Nav Compo</NavItemLink>
              <NavItemLink route="/area2/two">Two</NavItemLink>
            </NavItemDropdown>
            <NavItemDropdown text={'Dropdown Hover'} action={'hover'}>
              <NavItemLink route="/area2/one">One</NavItemLink>
              <NavItemLink route="/area2/two">Two</NavItemLink>
            </NavItemDropdown>
            <NavItemDropdown text={'Redux'} action={'hover'} activeOnPath={'/redux/'}>
              <NavItemLink route="/redux/redux-info">...</NavItemLink>
            </NavItemDropdown>
            <NavItemDropdown text={'Bootstrap'} action={'hover'} activeOnPath={'/bootstrap/'}>
              <NavItemLink route="/bootstrap/nav-info">Nav Component</NavItemLink>
              <NavItemLink route="/bootstrap/navbars-info">Navbar Component</NavItemLink>
              <NavItemLink route="/bootstrap/buttons-info">Buttons</NavItemLink>
            </NavItemDropdown>
          </NavbarNav>
          <NavbarNavRight>
            <NavItemText>Signed in as Eli</NavItemText>
            <NavItemText><span className="glyphicon glyphicon-off" /></NavItemText>
          </NavbarNavRight>
        </NavbarMobileCollapse>
      </ContainerFluid>
    </NavbarFixedTop>
  );
}
