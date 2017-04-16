import React from 'react';
import classNames from 'classnames';

export function Container(props) {
  return <div {...props} className={classNames('container', props.className)} />;
}
export function ContainerFluid(props) {
  return <div {...props} className={classNames('container-fluid', props.className)} />;
}
export function Row(props) {
  return <div {...props} className={classNames('row', props.className)} />;
}
export function Col(props) {
  return <div {...props} />;
}
