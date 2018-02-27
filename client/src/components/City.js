import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class City extends Component {
render(){

  return (
    <div>
      <h1>{this.props.city}</h1>
      <div className="imgContainer">
      <Link to={`/cities/${this.props.id}`}>
      <img src={this.props.photo} alt={this.props.city}/>
      </Link>
      </div>
    </div>
  );
}
}

export default City;

