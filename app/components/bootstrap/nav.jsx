import React from 'react';
import classNames from 'classnames';

import NavItemLinkClass from './_base/NavItemLinkClass';
import NavItemDropdownClass from './_base/NavItemDropdownClass';

/**
* Nav
* - http://getbootstrap.com/components/#nav
*/
export function Nav(props) {
  return <ul {...props} className={classNames('nav', props.className)} />;
}
export function NavTabs(props) {
  return <Nav className={'nav-tabs'}>{props.children}</Nav>;
}
export function NavPills(props) {
  return <Nav className={'nav-pills'}>{props.children}</Nav>;
}
export function NavStacked(props) {
  return <Nav className={'nav-stacked'}>{props.children}</Nav>;
}
export function NavStackedPills(props) {
  return <Nav className={'nav-pills nav-stacked'}>{props.children}</Nav>;
}

/**
* Nav Items
* - Dropdown, Links, Text
* - TODO: <a> really shouldn't be used here for text
*/
export function NavItemText(props) {
  return (
    <li className={classNames({ active: props.active }, props.className)}>
      <a className="link">{props.children}</a>
    </li>
  );
}
export function NavItemLink(props) {
  return props.href
    ? <li><a {...props}>{props.children}</a></li>
    : <NavItemLinkClass {...props} />;
}
export function NavItemDropdown(props) {
  return <NavItemDropdownClass {...props} />;
}
