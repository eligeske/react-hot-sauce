import Home from './containers/pages/home/HomePage';
import ReactPage from './containers/pages/react/ReactPage';
import ReactRouterDOMPage from './containers/pages/react-router-dom/ReactRouterDOMPage';
import ReduxPage from './containers/pages/redux/ReduxPage';
import BootstrapPage from './containers/pages/bootstrap/BootstrapPage';

export default [
  { path: '/', component: Home, key: 'home', exact: true },
  { path: '/react', component: ReactPage, key: 'react' },
  { path: '/react-router', component: ReactRouterDOMPage, key: 'react-router' },
  { path: '/redux', component: ReduxPage, key: 'redux' },
  { path: '/bootstrap', component: BootstrapPage, key: 'bootstrap' }
];
