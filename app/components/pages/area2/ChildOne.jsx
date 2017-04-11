import React from 'react';

export default function ChildOne({ match }) {
  console.log(match); // eslint-disable-line
  return (
    <div className="well">
      <h3>Child One</h3>
      <p>Blurb blurb</p>
    </div>
  );
}
