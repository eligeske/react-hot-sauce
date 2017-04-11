import React, { PureComponent } from 'react';
import { getChildByKey } from './nested';

import Row from '../components/common/layout/Row';

export default class SideBarLayout extends PureComponent {
  getChildByKey = key => getChildByKey.call(this, key);
  render() {
    return (
      <Row>
        <div className="col-xs-12 col-sm-3">
          {this.getChildByKey('sidebar')}
        </div>
        <div className="col-xs-12 col-sm-9">
          {this.getChildByKey('page')}
        </div>
      </Row>
    );
  }
}
