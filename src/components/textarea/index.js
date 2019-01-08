import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import validate from '../../utils/validator/field';

const $ = window.$;

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmpty: true,
      value: null,
      valid: false,
      errors: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

  }

  handleChange(event) {
    var that = this;
    validate(event.target, function (field, errors) {
      that.setState({
        errors: errors
      });
      // that.state.errors = errors;
      // that.forceUpdate();
    });
  }

  handleBlur(event) {
    var that = this;
    validate(event.target, function (field, errors) {
      that.setState({
        errors: errors
      });
    });
  }

  componentWillReceiveProps(props) {
    if(props.errors){
      if (props.errors.length) {
        this.setState({ errors: props.errors });
      }
    }
  }

  render() {
    const hasErrors = this.state.errors && this.state.errors.length;
    return (
      <div className={`form-group ${ hasErrors ? 'has-danger' : ''}`}>
        {this.props.title ? <label htmlFor={this.props.id ? this.props.id : ''}> {this.props.title}</label> : '' }
        <textarea
          rows={ this.props.rows ? this.props.rows : '' }
          data-validators={ this.props.validator ? this.props.validator : '' }
          className={`form-control ${ hasErrors ? 'form-control-danger' : ''}`}
          id={ this.props.id ? this.props.id : '' } placeholder={ this.props.title ? this.props.title : '' }
          onChange={ this.handleChange }>
        </textarea>
        {hasErrors ? <div className="form-control-feedback">{this.state.errors[0]}</div> : ''}
      </div>
    );
  }
}
