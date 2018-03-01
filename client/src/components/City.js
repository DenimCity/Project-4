import React, {Component} from 'react';
import {Link} from 'react-router-dom'
// import axios from 'axios'
import styled from 'styled-components'
// import HousesList from './HouseList'
import { Wrapper, Image} from '../basicstyledcomponents/basicComponents'
class City extends Component {
  render() {

    return (
      <div>
        <Wrapper>
        <Title3>{this.props.name}</Title3>
        <div className="imgContainer">
          <Link to={`/cities/${this.props.id}/houses`}>
            <Image src={this.props.photo} alt={this.props.city}/>
          </Link>
          </div>
        </Wrapper>
      </div>
    );
  }
}
export default City;

const Title3 = styled.span`
font-family: 'Shrikhand', cursive;
font-size:5rem;
color:#FF9009;
`