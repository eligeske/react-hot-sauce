import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class NavBarLink extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  state = {
    active: false
  }

  componentDidMount() {
    this.setActive(this.props.link, this.context.router);
  }

  componentWillReceiveProps(nextProps, nextRouter) {
    this.setActive(nextProps.link, nextRouter.router);
  }

  setActive(link, router) {
    const { location } = router.route;
    const match = location.pathname === link;
    this.setState({
      active: match
    });
  }

  render() {
    const { link, children } = this.props;
    return (
      <li className={this.state.active ? 'active' : ''}>
        <NavLink to={link}>{children}</NavLink>
      </li>
    );
  }
}
