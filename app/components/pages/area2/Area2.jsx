import React from 'react';
import { Route } from 'react-router-dom';

import SideBarLayout from '../../../containers/SideBarLayout';
import Row from '../../common/layout/Row';
import {
  NavBarStacked, NavBarItem, NavBarLink, NavBarItemDropDown
} from '../../common/nav-bar/';


import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

export default function Area2({ match }) {
  return (
    <div>
      <SideBarLayout>
        <NavBarStacked key="sidebar">
          <NavBarLink link={`${match.url}/one`}>Child One!</NavBarLink>
          <NavBarLink link={`${match.url}/two`}>Child Two!</NavBarLink>
          <NavBarItem>Profile</NavBarItem>
          <NavBarItemDropDown text={'my dropdown'}>
            <NavBarItem>Hello</NavBarItem>
            <NavBarItem>Item</NavBarItem>
          </NavBarItemDropDown>
        </NavBarStacked>
        <Row key="page">
          <h2>Area 2</h2>
          <Route exact path={`${match.url}/one`} component={ChildOne} />
          <Route exact path={`${match.url}/two`} component={ChildTwo} />
        </Row>
      </SideBarLayout>
    </div>
  );
}
