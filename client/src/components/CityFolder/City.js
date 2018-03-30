import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Wrapper, CityImages, Title3} from '../../basicstyledcomponents/basicComponents'


class City extends Component {
  render() {
    return (
      <div>
        <Wrapper>
        <Title3>{this.props.name}</Title3>
        <div className="imgContainer">
          <Link to={`/cities/${this.props.id}/houses`}>
            <CityImages src={this.props.photo} alt={this.props.city} className="pictures"/>
          </Link>
          </div>
        </Wrapper>
      </div>
    );
  }
}
export default City;


