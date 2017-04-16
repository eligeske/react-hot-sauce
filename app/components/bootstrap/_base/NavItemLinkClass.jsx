import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
* NavLinkClass
* - sets active css on item when route matches.
* - currently supports only full path match on routes.
*/
export default class NavItemLinkClass extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  static propTypes = {
    route: PropTypes.string.isRequired
  }
  state = {
    active: false
  }

  componentDidMount() {
    this.setActive(this.props.route, this.context.router);
  }

  componentWillReceiveProps(nextProps, nextRouter) {
    this.setActive(nextProps.route, nextRouter.router);
  }

  setActive(route, router) {
    const { location } = router.route;
    const match = location.pathname === route;
    this.setState({
      active: match
    });
  }

  render() {
    const { route, children } = this.props;
    return (
      <li className={this.state.active ? 'active' : ''}>
        <NavLink to={route}>{children}</NavLink>
      </li>
    );
  }
}
