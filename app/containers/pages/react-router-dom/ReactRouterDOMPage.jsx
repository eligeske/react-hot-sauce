import React from 'react';
import { Route } from 'react-router-dom';

import SideBarLayout from '../../../components/layouts/SideBarLayout';
import {
  NavStackedPills, NavItemLink
} from '../../../components/bootstrap/nav';

import ReactRouterDOMInfo from './react-router-dom-info/ReactRouterDOMInfo';

export default function ReactRouterDOMPage({ match }) {
  return (
    <div>
      <SideBarLayout>
        <section key="sidebar">
          <NavStackedPills key="sidebar">
            <NavItemLink route={`${match.url}/react-router-dom-info`}>Intro</NavItemLink>
          </NavStackedPills>
        </section>
        <section key="body">
          <Route path={`${match.url}/react-router-dom-info`} component={ReactRouterDOMInfo} />
        </section>
      </SideBarLayout>
    </div>
  );
}
