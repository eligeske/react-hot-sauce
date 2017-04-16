import React, { PureComponent } from 'react';
import { getChildByKey } from './nested';

import { Container } from '../../components/bootstrap/layout';

import './sideBar.less';

export default class SideBarLayout extends PureComponent {
  getChildByKey = key => getChildByKey.call(this, key);
  render() {
    return (
      <Container>
        <div className="side-bar-left col-xs-12 col-sm-2">
          {this.getChildByKey('sidebar')}
        </div>
        <div className="side-bar-page col-xs-12 col-sm-10">
          {this.getChildByKey('body')}
        </div>
      </Container>
    );
  }
}
