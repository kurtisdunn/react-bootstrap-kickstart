import React from 'react';
import styles from './index.scss';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('About extends React.Component: ', props);
  }
  render() {
    return (
      <div className="about">
        <h1>Another View</h1>
      </div>
    );
  }
}
