import React, { Component } from "react";
import PropTypes from 'prop-types';

class ExpenseForm extends Component {
  
  constructor(props) {
    super(props);
    this.defaultState = {
        id: null,
        timestamp: '',
        name: '',
        price: 0,
    };

    const initialState = this.props.expense || this.defaultState;

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
        <input name="price" placeholder="price" type="number" value={this.state.price} onChange={this.onChange} />
        <button>{this.props.buttonText}</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  expense: PropTypes.object,
}

ExpenseForm.defaultProps = {
  expense: {
    id: null,
    timestamp: '',
    name: '',
    price: 0,
  }
}

export default ExpenseForm;