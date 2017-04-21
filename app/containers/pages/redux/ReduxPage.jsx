import React from 'react';
import { Route } from 'react-router-dom';

import SideBarLayout from '../../../components/layouts/SideBarLayout';
import {
  NavStackedPills, NavItemLink
} from '../../../components/bootstrap/nav';

import ReduxInfo from './redux-info/ReduxInfo';
import BasicStore from './basic-store/BasicStore';
import BasicReactRedux from './basic-react-redux/BasicReactRedux';

export default function ReduxPage({ match }) {
  return (
    <div>
      <SideBarLayout>
        <section key="sidebar">
          <NavStackedPills key="sidebar">
            <NavItemLink route={`${match.url}/redux-info`}>Intro</NavItemLink>
            <NavItemLink route={`${match.url}/basic-store`}>Basic Store</NavItemLink>
            <NavItemLink route={`${match.url}/basic-react-redux`}>Basic React Redux</NavItemLink>
          </NavStackedPills>
        </section>
        <section key="body">
          <Route path={`${match.url}/redux-info`} component={ReduxInfo} />
          <Route path={`${match.url}/basic-store`} component={BasicStore} />
          <Route path={`${match.url}/basic-react-redux`} component={BasicReactRedux} />
        </section>
      </SideBarLayout>
    </div>
  );
}
