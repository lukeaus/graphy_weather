import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Logo from './logo';

export default class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
