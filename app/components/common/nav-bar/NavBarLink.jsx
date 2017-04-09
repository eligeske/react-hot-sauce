import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBarLink(props) {
  return (
    <li>
      <Link to={props.link}>{props.children}</Link>
    </li>
  );
}
