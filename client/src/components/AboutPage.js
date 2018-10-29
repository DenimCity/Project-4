import React, {Component} from 'react'
import {Title, Wrapper} from '../basicstyledcomponents/basicComponents'
import styled from 'styled-components'
export default class About extends Component {
  render() {
    return (
      <div>
        <Title>About?</Title>
        <Wrapper>
          <Word>Sometimes finding housing for internships can be a hassle.
          Due to the lack of convience, we decided to bridge the gap.
          <br/>
          <br/>
          Here students will be able to find housing close to their assigned sites. 
          And we know venturing to a new city may be stressful. So to better accomodate the student, we have a few suggested meetup events for each city.
          </Word>
        </Wrapper>
      </div>
    )
  }
}
const Word = styled.p `
font-size: 2rem;
max-width: 37rem;
font-family: monospace;
`

