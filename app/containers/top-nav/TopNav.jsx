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
            <NavItemDropdown
              text={'React'}
              action={'hover'}
              route={'/react/react-info'}
              activeOnPath={'/react/'}
            >
              <NavItemLink route="/react/react-info">Intro</NavItemLink>
            </NavItemDropdown>
            <NavItemDropdown
              text={'React Router'}
              action={'hover'}
              route={'/react-router/react-router-dom-info'}
              activeOnPath={'/react-router/'}
            >
              <NavItemLink route="/react-router/react-router-dom-info">Intro</NavItemLink>
            </NavItemDropdown>
            <NavItemDropdown
              text={'Redux'}
              action={'hover'}
              route={'/redux/redux-info'}
              activeOnPath={'/redux/'}
            >
              <NavItemLink route="/redux/redux-info">Intro</NavItemLink>
              <NavItemLink route="/redux/basic-store">Basic Store</NavItemLink>
              <NavItemLink route="/redux/react-redux-basic">Basic React Redux</NavItemLink>
              <NavItemLink route="/redux/react-redux-pure">Pure React Redux</NavItemLink>
            </NavItemDropdown>
            <NavItemDropdown
              text={'Bootstrap'}
              action={'hover'}
              route={'/bootstrap/bootstrap-info'}
              activeOnPath={'/bootstrap/'}
            >
              <NavItemLink route="/bootstrap/bootstrap-info">Intro</NavItemLink>
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
