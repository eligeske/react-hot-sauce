import React from 'react';

export default function NavBarBrand(props) {
  return (
    <div className="navbar-header">
      <a className="navbar-brand">
        {props.children}
      </a>
    </div>
  );
}
