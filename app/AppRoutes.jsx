import React from 'react';
import { Route } from 'react-router-dom';

import Area1 from './components/areas/area1/Area1';
import Area2 from './components/areas/area2/Area2';

export default function AppRoutes() {
  return (
    <section>
      <Route exact path="/" component={Area1} />
      <Route exact path="/area1" component={Area1} />
      <Route path="/area2" component={Area2} />
    </section>
  );
}
