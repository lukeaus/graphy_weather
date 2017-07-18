import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {

    var myLatlng = new google.maps.LatLng(this.props.lat, this.props.lon);

    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: myLatlng
    });
  }
  // namespace of GoogleMap is google.maps
  // see googleapis script tag in /index.html
  render () {
    return <div ref="map" />;
  }
}

export default GoogleMap;
