import React, { Component, Fragment } from 'react';
import CategoryContainer from './category-container.js';

export default class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <CategoryContainer />
      </Fragment>
    );
  }
}