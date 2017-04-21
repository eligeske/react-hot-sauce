import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './buttons';

export function Form(props) {
  const classNames = [];
  const prefix = 'form-';

  ['inline', 'horizontal'].forEach((cn) => {
    if (props[cn] === true) {
      classNames.push(`${prefix}${cn}`);
    }
  });
  return (
    <form className={classNames.join(' ')}>{props.children}</form>
  );
}
export function FormGroup(props) {
  const classNames = ['form-group'];
  const prefix = 'has-';

  ['error', 'warning', 'success'].forEach((cn) => {
    if (props[cn] === true) {
      classNames.push(`${prefix}${cn}`);
    }
  });
  return <div className={classNames.join(' ')}>{props.children}</div>;
}
export function FormTextArea(props) {
  return <textarea className={'form-control'} {...props} />;
}
export function FormInput(props) {
  return <input className={'form-control'} type={props.type} {...props} />;
}
FormInput.prototype.propTypes = {
  type: PropTypes.oneOf([
    'text', 'password', 'datetime', 'datetime-local',
    'date', 'month', 'time', 'week', 'number', 'email',
    'url', 'search', 'tel', 'color'
  ])
};
FormInput.prototype.defaultProps = {
  type: 'text'
};

export function FormButton(props) {
  return <Button {...props} />;
}
