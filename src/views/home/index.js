import React from 'react';
import styles from './index.scss';

import Photo from '../../components/photo';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('Home extends React.Component: ', props);
  }
  render() {
    return (
      <div className="home">
        <h1>Blank Bootstrap</h1>

        <p className="lead">Containers set to my fav layout for Desktop & Mobile</p>
        <hr />
        <div className="container">

          <pre><code>
          {`.container{
            // Extra small devices (portrait phones, less than 576px)
          @media (max-width: 575.98px) {
            max-width: 100%;
            padding: 0px;
            header{
              margin-top:0;
            }
          }

          // Small devices (landscape phones, less than 768px)
          @media (max-width: 767.98px) {
            max-width: 100%;
          }

          // Medium devices (tablets, less than 992px)
          @media (max-width: 991.98px) {
            max-width: 100%;
          }

          // Large devices (desktops, less than 1200px)
          @media (max-width: 1199.98px) {
            max-width: 1199.98px;
          }

          // Extra large devices (large desktops)
          max-width: 1199.98px;
          // No media query since the extra-large breakpoint has no upper bound on its width
          }
`}
          </code></pre>
          

        </div>
      </div>
    );
  }
}
