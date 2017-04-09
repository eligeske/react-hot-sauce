import React from 'react';

export default function NavBarBase(props) {
  return (
    <ul className={props.classNames.join(' ')} >
      {props.children}
    </ul>
  );
}
