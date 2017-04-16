import React from 'react';
import { Route } from 'react-router-dom';

import SideBarLayout from '../../../components/layouts/SideBarLayout';
import {
  NavStackedPills, NavItemLink
} from '../../../components/bootstrap/nav';

import ReduxInfo from './redux-info/ReduxInfo';

export default function ReduxPage({ match }) {
  return (
    <div>
      <SideBarLayout>
        <section key="sidebar">
          <NavStackedPills key="sidebar">
            <NavItemLink route={`${match.url}/redux-info`}>....</NavItemLink>
          </NavStackedPills>
        </section>
        <section key="body">
          <Route path={`${match.url}/redux-info`} component={ReduxInfo} />
        </section>
      </SideBarLayout>
    </div>
  );
}
