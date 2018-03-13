import React, { Component } from 'react'
import {Title, Wrapper} from '../../basicstyledcomponents/basicComponents'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export default class HomePending extends Component {
  render() {
    return (
      <div>
        <Title>Submission Pending</Title>
        <Wrapper>
          <Word>
          Thank you for your submission, your house is now under review.  
        
          We will process the information as soon as possible. Check back with us in a few hours to view your submission.
          </Word>

          <Link to="/">
         <HomeButton>Go Home</HomeButton>
         </Link>
        
        </Wrapper>
        <div>
        </div> 
      </div>
    )
  }
}

const Word = styled.p `
font-size: 2rem;
max-width: 37rem;
font-family: monospace;
`

const HomeButton = styled.button`
    background-color: orange;
    width: 11vh;
    height: 4vh;
@media (max-width: 669px){
  width: 22vw;
    height: 6vh;
    background-color: orange;
    border-radius: 2vw;
}

`