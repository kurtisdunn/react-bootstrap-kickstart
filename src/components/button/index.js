import React from 'react';
import './index.scss';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <button
          onClick = { this.props.onClick ? this.props.onClick : undefined }
          type={ this.props.type ? this.props.type : 'button' }
          style={ this.props.style ? this.props.style : null }
          className={ `btn btn-primary ${this.props.class ? this.props.class : ''}` }>
          { this.props.value ? this.props.value : 'Submit' }
        </button>
    );
  }
}
