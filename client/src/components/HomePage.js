import React, {Component} from 'react'
import {Title } from '../basicstyledcomponents/basicComponents'
import styled from 'styled-components'
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Title>Make finding your internship housing
        </Title>
        <Title>a piece of cake . . . </Title>
        <HomeBody>

          <img src="https://i.imgur.com/GhgBxx9.jpg" alt=""/>

        </HomeBody>
      </div>
    )
  }
}

const HomeBody = styled.div `
display:flex;
flex-direction:column;
max-height:1rem;

`