import React from 'react';

export default function NavBarItem(props) {
  return (
    <li>
      <a to={props.link}>{props.children}</a>
    </li>
  );
}
