import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import TopNav from './components/top-nav/TopNav';
import Container from './components/common/Container';


import AppRoutes from './AppRoutes';

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
          <Container>
            <AppRoutes />
          </Container>
        </div>
      </Router>
    );
  }
}
