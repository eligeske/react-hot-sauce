import React from 'react';

export default function (props) {
  return (
    <ul className="nav nav-pills nav-stacked">
      {props.children}
    </ul>
  );
}
