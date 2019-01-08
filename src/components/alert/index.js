import React from 'react';
import './index.scss';

export default class Alert extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`alert alert-${this.props.type ? this.props.type : 'default'}`} role="alert">
      {this.props.message}
      </div>
    );
  }
}
