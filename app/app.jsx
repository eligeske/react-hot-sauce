import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TopNav from './containers/top-nav/TopNav';
import Page from './containers/pages/PageWrapper';

import pageRoutes from './pageRoutes';

export default class App extends PureComponent {
  static propTypes = {
    config: PropTypes.shape({}).isRequired
  }

  render() {
    return (
      <Router>
        <div>
          <header>
            <TopNav />
          </header>
          <Page>
            {pageRoutes.map(route => <Route {...route} />)}
          </Page>
        </div>
      </Router>
    );
  }
}
