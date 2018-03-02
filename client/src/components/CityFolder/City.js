import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper, Image, Title3} from '../../basicstyledcomponents/basicComponents'


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

