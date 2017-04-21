import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { classStates, sizes } from './_base/enums';

export class Button extends PureComponent {
  static propTypes = {
    size: PropTypes.oneOf(sizes),
    type: PropTypes.oneOf(['default', ...classStates])
  }
  static defaultProps = {
    type: 'default',
    size: 'md'
  }
  render() {
    const css = `btn btn-${this.props.type} btn-${this.props.size}`;
    return (
      <div className={classNames(css, this.props.className)} {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export const arb = '';
