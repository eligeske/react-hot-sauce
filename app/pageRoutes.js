import Home from './containers/pages/home/HomePage';
import Area1 from './containers/pages/area1/Area1';
import ReduxPage from './containers/pages/redux/ReduxPage';
import BootstrapPage from './containers/pages/bootstrap/BootstrapPage';

export default [
  { path: '/', component: Home, key: 'home', exact: true },
  { path: '/area1', component: Area1, key: 'area1' },
  { path: '/redux', component: ReduxPage, key: 'redux' },
  { path: '/bootstrap', component: BootstrapPage, key: 'bootstrap' }
];
