import React from 'react';
import Container from '../common/Container';
import {
  NavBar, NavBarRight, NavBarItem, NavBarLink, NavBarItemDropDown,
  NavBarTop, NavBarBrand, NavBarMobileCollapse
} from '../common/nav-bar/';

export default function TopNav() {
  return (
    <NavBarTop>
      <Container>
        <NavBarBrand>Hot Sauce</NavBarBrand>
        <NavBarMobileCollapse>
          <NavBar>
            <NavBarItemDropDown text={'Area Group'}>
              <NavBarLink link="/">Area 1</NavBarLink>
              <NavBarLink link="/area2">Area 2</NavBarLink>
            </NavBarItemDropDown>
          </NavBar>
          <NavBarRight>
            <NavBarItem>Signed in as Eli</NavBarItem>
            <NavBarItem><span className="glyphicon glyphicon-off" /></NavBarItem>
          </NavBarRight>
        </NavBarMobileCollapse>
      </Container>
    </NavBarTop>
  );
}
