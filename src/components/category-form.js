import React, { Component } from "react";
import PropTypes from 'prop-types';

class CategoryForm extends Component {
  
  constructor(props) {
    super(props);
    this.defaultState = {
        id: null,
        timestamp: '',
        name: '',
        budget: 0,
    };

    const initialState = this.props.category || this.defaultState;

    this.state =  {...initialState};
  }
  
  onSubmit = e => {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ ...this.defaultState });
  };

  onChange = e => {
    const val =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;

    const changedBit = {
      [e.target.name]: val
    };
    this.setState(changedBit);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input name="name" placeholder="name" value={this.state.name} onChange={this.onChange} />
        <input name="budget" placeholder="budget" type="number" value={this.state.budget} onChange={this.onChange} />
        <button>{this.props.buttonText}</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  category: PropTypes.object,
}

CategoryForm.defaultProps = {
  category: {
    id: null,
    timestamp: '',
    name: '',
    budget: 0,
  }
}

export default CategoryForm;