import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { navStates } from './_base/enums';
import { Nav } from './nav';

/**
* Navbar
* - http://getbootstrap.com/components/#navbar
*/
export class Navbar extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['default', ...navStates])
  }
  static defaultProps = {
    type: 'default'
  }
  render() {
    const css = `navbar navbar-${this.props.type}`;
    return (
      <nav className={classNames(css, this.props.className)}>
        {this.props.children}
      </nav>
    );
  }
}

export function NavbarFixedTop(props) {
  return <Navbar {...props} className={classNames('navbar-fixed-top', props.className)} />;
}
export function NavbarStaticTop(props) {
  return <Navbar {...props} className={classNames('static-fixed-top', props.className)} />;
}

/**
* NavbarMobileCollapse
* - collapse enclosed when in mobile breakpoints
*/
export function NavbarMobileCollapse(props) {
  return <div className={'navbar-collapse collapse'}>{props.children}</div>;
}

/**
* NavbarBrand/NavbarBrandLink
* - Logo/brand, link or text
*/
export function NavbarBrand(props) {
  return (
    <div className="navbar-header">
      <span className="navbar-brand">
        {props.children}
      </span>
    </div>
  );
}
export function NavbarBrandLink(props) {
  return (
    <div className="navbar-header">
      <NavLink className="navbar-brand" to={props.route}>
        {props.children}
      </NavLink>
    </div>
  );
}


/**
* NavbarNav
* - child navs for nav bar
*/
export function NavbarNav(props) {
  return (
    <Nav className={'navbar-nav'}>
      {props.children}
    </Nav>
  );
}
export function NavbarNavRight(props) {
  return (
    <Nav className={'navbar-nav navbar-right'}>
      {props.children}
    </Nav>
  );
}
