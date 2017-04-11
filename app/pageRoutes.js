import Area1 from './components/pages/area1/Area1';
import Area2 from './components/pages/area2/Area2';

export default [
  { path: '/', component: Area1, key: 'home', exact: true },
  { path: '/area1', component: Area1, key: 'area1', exact: true },
  { path: '/area2', component: Area2, key: 'area2' }
];
