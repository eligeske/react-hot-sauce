import React from 'react';
import NavBarBase from './NavBarBase';

export default function NavBar(props) {
  return (
    <NavBarBase classNames={['nav', 'navbar-nav']}>
      {props.children}
    </NavBarBase>
  );
}
