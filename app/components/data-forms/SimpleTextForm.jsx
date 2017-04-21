import React, { PureComponent } from 'react';

import {
  Form, FormGroup, FormInput, FormButton
} from '../bootstrap/form';

export default class SimpleTextForm extends PureComponent {
  defaultState = {
    inputValue: '',
    hasError: false
  }
  state = this.defaultState

  resetState() {
    this.setState(this.defaultState);
  }
  handleKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      this.handleClick();
    }
  }
  handleClick = () => {
    if (!this.state.inputValue.length) {
      this.setState({
        hasError: true
      });
    } else {
      this.props.onSubmit(this.state.inputValue);
      this.resetState();
    }
  }
  handleChange = (ev) => {
    this.setState({
      inputValue: ev.target.value,
      hasError: false
    });
  }
  render() {
    return (
      <Form inline>
        <FormGroup error={this.state.hasError}>
          <FormInput
            placeholder={this.props.placeholderText}
            value={this.state.inputValue}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </FormGroup>
        <FormButton type={'info'} onClick={this.handleClick}>{this.props.buttonText}</FormButton>
      </Form>
    );
  }
}
