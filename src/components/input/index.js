import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import validate from '../../utils/validator/field';

const $ = window.$;

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

  }

  handleChange(event) {
    const that = this;
    validate(event.target, function (field, errors) {
      that.setState({
        errors: errors
      });
    });
  }

  handleBlur(event) {
    const that = this;
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
    const hasErrors = this.props.errors && this.props.errors.length;
    return (
      <div className={`form-group ${ hasErrors ? 'has-danger' : ''}`}>
        {this.props.title ? <label htmlFor={this.props.id ? this.props.id : ''}> {this.props.title}</label> : '' }
        <input data-validators={ this.props.validator ? this.props.validator : '' } type={ this.props.type ? this.props.type : 'input' } className={`form-control ${ hasErrors ? 'form-control-danger' : ''}`} id={ this.props.id ? this.props.id : '' } placeholder={ this.props.title ? this.props.title : '' } onChange={ this.handleChange } />
        {hasErrors ? <div className="form-control-feedback">{this.state.errors[0]}</div> : ''}
      </div>
    );
  }
}
