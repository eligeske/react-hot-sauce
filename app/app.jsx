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
  componentWillReceiveProps() {
    window.perf = {
      start: performance.now()
    };
    console.log('perf start:', window.perf.start);
  }
  componentWillMount() {
    window.perf = {
      start: performance.now()
    };
    console.log('perf start:', window.perf.start);
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
