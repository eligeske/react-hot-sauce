import React from 'react';
import { Route } from 'react-router-dom';

import SideBarLayout from '../../../components/layouts/SideBarLayout';
import { Row } from '../../../components/bootstrap/layout';
import {
  NavStackedPills, NavItemText, NavItemLink, NavItemDropdown
} from '../../../components/bootstrap/nav';

import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

export default function Area1({ match }) {
  return (
    <div>
      <SideBarLayout>
        <NavStackedPills key="sidebar">
          <NavItemLink route={`${match.url}/one`}>Child One!</NavItemLink>
          <NavItemLink route={`${match.url}/two`}>Child Two!</NavItemLink>
          <NavItemText>Profile</NavItemText>
          <NavItemDropdown text={'my dropdown'} caret>
            <NavItemText>Hello</NavItemText>
            <NavItemText>Item</NavItemText>
          </NavItemDropdown>
        </NavStackedPills>
        <Row key="page">
          <h2>Area 1</h2>
          <Route exact path={`${match.url}/one`} component={ChildOne} />
          <Route exact path={`${match.url}/two`} component={ChildTwo} />
        </Row>
      </SideBarLayout>
    </div>
  );
}
