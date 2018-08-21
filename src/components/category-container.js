
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import CategoryForm from './category-form.js';
import CategoryItem from './category-item.js';

import { createCategory, updateCategory, destroyCategory } from './action/category-action.js';

class CategoryContainer extends Component {
  render() {
    return (
        <Fragment>
        <CategoryForm onComplete={this.props.createCategory} buttonText="create" />
        {this.props.categories.map(category => (
          <li key={category.id}>
            <CategoryItem category={category} onComplete={this.props.updateCategory} onDelete={this.props.destroyCategory} />
          </li>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoryState.categories,
});

const mapDispatchToProps = dispatch => ({
  createCategory: category => dispatch(createCategory(category)),
  updateCategory: category => dispatch(updateCategory(category)),
  destroyCategory: category => dispatch(destroyCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);