import React from 'react';

export default function NavBarMobileCollapse(props) {
  return (
    <div className="navbar-collapse collapse">
      {props.children}
    </div>
  );
}
