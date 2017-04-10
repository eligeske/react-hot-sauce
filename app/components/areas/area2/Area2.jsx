import React from 'react';
import { Route } from 'react-router-dom';

import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

export default function Area2({ match }) {
  console.log(match); // eslint-disable-line
  return (
    <div>
      <h2>Area 2</h2>
      <Route exact path={`${match.url}/one`} component={ChildOne} />
      <Route exact path={`${match.url}/two`} component={ChildTwo} />
    </div>
  );
}
