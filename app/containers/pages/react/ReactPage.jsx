import React from 'react';
import { Route } from 'react-router-dom';

import SideBarLayout from '../../../components/layouts/SideBarLayout';
import {
  NavStackedPills, NavItemLink
} from '../../../components/bootstrap/nav';

import ReactInfo from './react-info/ReactInfo';

export default function ReactPage({ match }) {
  return (
    <div>
      <SideBarLayout>
        <section key="sidebar">
          <NavStackedPills key="sidebar">
            <NavItemLink route={`${match.url}/react-info`}>Intro</NavItemLink>
          </NavStackedPills>
        </section>
        <section key="body">
          <Route path={`${match.url}/react-info`} component={ReactInfo} />
        </section>
      </SideBarLayout>
    </div>
  );
}
