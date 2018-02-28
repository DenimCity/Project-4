import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import HousesList from './HouseList'
class City extends Component {
  render() {

    return (
      <div>
        <h1>{this.props.name}</h1>
        <div className="imgContainer">
          <Link to={`/cities/${this.props.id}/houses`}>
            <img src={this.props.photo} alt={this.props.city}/>
          </Link>
          <li>{this.props.amenities}</li>
        </div>
      </div>
    );
  }
}
export default City;
