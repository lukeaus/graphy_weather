import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    // a city with a list of all the forecast snapshots
    console.log(cityData);
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp).map((temp) => temp - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;
    const dts = cityData.list.map(weather => weather.dt);
    console.log(dts);

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
          <span className="google-map-label">{name}</span>
        </td>
        <td><Chart data={temps} dts={dts} color="orange" /></td>
        <td><Chart data={pressures} dts={dts} color="green" /></td>
        <td><Chart data={humidities} dts={dts} color="black" /></td>
      </tr>
    );
  }

  render() {
    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature <small>°C</small></th>
              <th>Pressure <small>hPa</small></th>
              <th>Humidity <small>%</small></th>
            </tr>
          </thead>
          <tbody>
            { this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  // it is state.weather cause we used the weather key in combined Reducers
  return { weather };
}

// export connected version of WeatherList
export default connect(mapStateToProps)(WeatherList);
