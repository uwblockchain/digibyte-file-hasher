import React, { Component } from 'react';
import './Title.scss';

class Title extends Component {

  render() {
    return (
      <p> {this.props.title} </p>
    );
  }
}

export default Title;
