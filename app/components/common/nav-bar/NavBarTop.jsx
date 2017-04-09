import React from 'react';

export default function NavBarTop(props) {
  const classNames = ['navbar', 'navbar-nav', 'navbar-default', 'navbar-fixed-top'];
  return (
    <div className={classNames.join(' ')}>
      {props.children}
    </div>
  );
}
