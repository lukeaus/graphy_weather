import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form  className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a 5 day forecast for anywhere in Australia"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit"className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // this causes the ActionCreator to make sure action flows down into middleware
  // and then reducers inside of our redux application
  // By binding the ActionCreator fetchWeather this gives us access to this.props.fetchWeather
  // inside of our container SearchBar
  return bindActionCreators({ fetchWeather }, dispatch);
}

// mapDispatchToProps needs to be the second argument
// by passing in null, we are saying: this container SearchBar doesn't need
// any state
export default connect(null, mapDispatchToProps)(SearchBar);
