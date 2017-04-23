import React from 'react';
import { Route } from 'react-router-dom';

import SideBarLayout from '../../../components/layouts/SideBarLayout';
import {
  NavStackedPills, NavItemLink
} from '../../../components/bootstrap/nav';

import ReduxInfo from './redux-info/ReduxInfo';
import BasicStore from './basic-store/BasicStore';
import BasicReactRedux from './react-redux-basic/BasicReactRedux';
import ReactReduxPure from './react-redux-pure/PureReactRedux';

export default function ReduxPage({ match }) {
  return (
    <div>
      <SideBarLayout>
        <section key="sidebar">
          <NavStackedPills key="sidebar">
            <NavItemLink route={`${match.url}/redux-info`}>Intro</NavItemLink>
            <NavItemLink route={`${match.url}/basic-store`}>Basic Store</NavItemLink>
            <NavItemLink route={`${match.url}/react-redux-basic`}>Basic React Redux</NavItemLink>
            <NavItemLink route={`${match.url}/react-redux-pure`}>Pure React Redux</NavItemLink>
          </NavStackedPills>
        </section>
        <section key="body">
          <Route path={`${match.url}/redux-info`} component={ReduxInfo} />
          <Route path={`${match.url}/basic-store`} component={BasicStore} />
          <Route path={`${match.url}/react-redux-basic`} component={BasicReactRedux} />
          <Route path={`${match.url}/react-redux-pure`} component={ReactReduxPure} />
        </section>
      </SideBarLayout>
    </div>
  );
}
