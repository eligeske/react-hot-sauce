import React, { Component } from 'react';
import { matchPath } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  add as eventAdd,
  remove as eventRemove,
  trigger as eventTrigger
} from '../../../lib/events';

const globalCloseEventName = 'closeDropdownNavs';

// trigger close event for click
eventAdd(window, 'click', () => {
  eventTrigger(window, globalCloseEventName);
});


function NoCaretLink(props) {
  return (
    <a href="/" className="dropdown-toggle">
      {props.text}
    </a>
  );
}
function CaretLink(props) {
  return (
    <a href="/" className="dropdown-toggle">
      {props.text} <span className="caret" />
    </a>
  );
}

export default class NavItemDropdownClass extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    action: PropTypes.oneOf(['click', 'hover']),
    caret: PropTypes.bool,
    activeOnPath: PropTypes.string
  }
  static defaultProps = {
    action: 'click',
    caret: false
  }

  state = {
    expanded: false
  }

  hovering = false;
  globalActiveItem = false
  localCloseEventName = `${globalCloseEventName}.${Date.now()}`;

  handleClick = (ev) => {
    ev.preventDefault();
    this.toggleDropdown(!this.state.expanded);
    this.triggerGlobalClose();
  }

  handleMouseOver = (ev) => {
    ev.stopPropagation();
    this.hovering = true;
    this.toggleDropdown(true);
    this.triggerGlobalClose();
  }

  handleMouseOut = () => {
    this.hovering = false;
    this.toggleDropdown(this.hovering);
  }

  makeActionEvents() {
    const events = {
      onClick: this.handleClick
    };
    if (this.props.action === 'hover') {
      events.onMouseEnter = this.handleMouseOver;
      events.onMouseLeave = this.handleMouseOut;
    }
    return events;
  }

  toggleDropdown(expanded = false) {
    this.setState({ expanded });
  }

  toggleDropdownWithActiveCheck = (ev, expanded = false) => {
    if (!this.globalActiveItem && !this.hovering) {
      this.toggleDropdown(expanded);
    }
  }

  // global events for closing when other menu items are opened

  triggerGlobalClose() {
    this.globalActiveItem = true;
    eventTrigger(window, globalCloseEventName);
    setTimeout(() => (this.globalActiveItem = false), 0);
  }

  bindCloseEvent() {
    eventAdd(window, this.localCloseEventName, this.toggleDropdownWithActiveCheck);
  }

  unbindCloseEvent() {
    eventRemove(window, this.localCloseEventName);
  }

  pathIsActive() {
    if (!this.props.activeOnPath) { return false; }
    const { activeOnPath } = this.props;
    const { pathname } = this.context.router.route.location;
    const homePageMatch = pathname === '/' && activeOnPath === '/';
    const routerMatch = matchPath(pathname, { path: activeOnPath });
    return homePageMatch || (routerMatch && routerMatch.path !== '/');
  }

  // react

  componentDidMount() {
    this.bindCloseEvent();
  }

  componentWillUnmount() {
    this.unbindCloseEvent();
  }

  render() {
    const { props, state: { expanded } } = this;
    const events = this.makeActionEvents();
    const active = this.pathIsActive();
    const cssObj = { open: expanded, active };
    const css = classNames('dropdown', cssObj);
    const topLink = this.props.caret
      ? <CaretLink {...props} />
      : <NoCaretLink {...props} />;

    return (
      <li className={css} {...events}>
        {topLink}
        <ul className="dropdown-menu">
          {props.children}
        </ul>
      </li>
    );
  }
}
