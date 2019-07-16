import React, { Component } from 'react';
import { connect } from 'react-redux';

import City from '../containers/city';

class CityList extends Component {
  renderList() {
    return this.props.citites.map((city) => {
      return (
        <City key={city.name} city={city} />
      );
    });
  }

  render() {
    return (
      <ul className="list-group-item">
        {this.renderList}
      </ul>
    );
  }
}

function MapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(MapStateToProps)(CityList);
