import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { classStates, sizes } from './_base/enums';

export function Button(props) {
  return (
    <div className={classNames(`btn btn-${props.type} btn-${props.size}`, props.className)}>
      {props.children}
    </div>
  );
}
Button.prototype.propTypes = {
  size: PropTypes.oneOf(sizes),
  type: PropTypes.oneOf(['default', ...classStates])
};
Button.prototype.defaultProps = {
  type: 'default',
  size: 'md'
};

export const arb = '';
