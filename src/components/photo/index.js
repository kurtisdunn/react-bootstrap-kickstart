import React from 'react';
import './index.scss';

function rand(){
  return ['#66b9b4', '#216869', '#dce1de', '#46758c'][Math.floor(Math.random() * 3)];
}

export default class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: 'test',
      url: null,
      forSale: false
    };
  }
  render() {
    return (
      <div className={'photo'} style={{ background: rand() }}>
        { this.state.name }
      </div>
    );
  }
}
