import React, { Component } from 'react';
import { add as eventAdd, remove as eventRemove } from '../../../lib/events';

export default class NavBarItemDropDown extends Component {
  state = {
    expanded: false
  }

  offClickEventName = `click.topNavDropDown.${Date.now()}`

  onClick = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    this.toggleDropDown(!this.state.expanded);
  }

  toggleDropDown(expanded = false) {
    this.setState({ expanded });
  }

  componentDidMount() {
    eventAdd(
      window,
      this.offClickEventName,
      () => this.toggleDropDown(false)
    );
  }

  componentWillUnmount() {
    eventRemove(window, this.offClickEventName);
  }

  render() {
    const { onClick, props, state: { expanded } } = this;
    const mainClassNames = ['dropdown'];

    if (expanded) {
      mainClassNames.push('open');
    }

    return (
      <li className={mainClassNames.join(' ')}>
        <a href="/" className="dropdown-toggle" onClick={onClick}>
          {props.text}
          <span className="caret" />
        </a>
        <ul className="dropdown-menu">
          {props.children}
        </ul>
      </li>
    );
  }
}
