import React from 'react';
import { Route } from 'react-router-dom';

import SideBarLayout from '../../../components/layouts/SideBarLayout';
import {
  NavStackedPills, NavItemText, NavItemLink, NavItemDropdown
} from '../../../components/bootstrap/nav';

import BootstrapInfo from './bootstrap-info/BootstrapInfo';
import NavInfo from './nav-info/NavInfo';
import NavbarsInfo from './navbars-info/NavbarInfo';
import ButtonsInfo from './buttons-info/ButtonsInfo';

export default function BootstrapPage(...args) {
  const match = args[0].match;
  return (
    <div>
      <SideBarLayout>
        <NavStackedPills key="sidebar">
          <NavItemLink route={`${match.url}/bootstrap-info`}>Intro</NavItemLink>
          <NavItemLink route={`${match.url}/nav-info`}>Nav Component</NavItemLink>
          <NavItemLink route={`${match.url}/navbars-info`}>Navbar Components</NavItemLink>
          <NavItemLink route={`${match.url}/buttons-info`}>Buttons</NavItemLink>
          <NavItemLink route={`${match.url}/one#yes`}>Child One &gt; yes!</NavItemLink>
          <NavItemLink route={`${match.url}/two`}>Child Two!</NavItemLink>
          <NavItemText>Profile</NavItemText>
          <NavItemDropdown text={'my dropdown'} caret>
            <NavItemText>Hello</NavItemText>
            <NavItemText>Item</NavItemText>
          </NavItemDropdown>
        </NavStackedPills>
        <section key="body">
          <Route exact path={`${match.url}/bootstrap-info`} component={BootstrapInfo} />
          <Route exact path={`${match.url}/nav-info`} component={NavInfo} />
          <Route exact path={`${match.url}/navbars-info`} component={NavbarsInfo} />
          <Route exact path={`${match.url}/buttons-info`} component={ButtonsInfo} />
        </section>
      </SideBarLayout>
    </div>
  );
}
