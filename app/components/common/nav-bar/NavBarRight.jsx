import React from 'react';
import NavBarBase from './NavBarBase';

export default function NavBarRight(props) {
  return (
    <NavBarBase classNames={['nav', 'navbar-nav', 'navbar-right']}>
      {props.children}
    </NavBarBase>
  );
}
