import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TopNav from './components/top-nav/TopNav';
import Container from './components/common/Container';

const Area1 = () => (<div><h1>Area1</h1></div>);
const Area2 = () => (<div><h1>Area2</h1></div>);

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
            <section>
              <Route exact path="/" component={Area1} />
              <Route exact path="/area2" component={Area2} />
            </section>
          </Container>
        </div>
      </Router>
    );
  }
}
