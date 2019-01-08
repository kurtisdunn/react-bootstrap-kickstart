import './index.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="container">
        <p className="float-right"><a href="#">Back to top</a></p>
        <p>© 2017-{`${new Date().getFullYear()}`} Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
      </footer>
      );
  }
}
