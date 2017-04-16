import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { classStates } from './_base/enums';

/**
* Panel
* - http://getbootstrap.com/components/#panel
*/
export class Panel extends PureComponent {
  static propTypes = {
    appearance: PropTypes.oneOf(['default', ...classStates])
  }
  static defaultProps = {
    appearance: 'default'
  }

  render() {
    return (
      <div className={classNames(`panel panel-${this.props.appearance}`, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export function PanelHeading(props) {
  return (
    <div
      {...props}
      className={classNames('panel-heading', props.className)}
    />
  );
}
export function PanelBody(props) {
  return (
    <div
      {...props}
      className={classNames('panel-body', props.className)}
    />
  );
}
export function PanelFooter(props) {
  return (
    <div
      {...props}
      className={classNames('panel-footer', props.className)}
    />
  );
}
