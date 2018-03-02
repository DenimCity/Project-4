import React, {Component} from 'react'
import {Title, Wrapper} from '../basicstyledcomponents/basicComponents'
import styled from 'styled-components'
export default class About extends Component {
  render() {
    return (
      <div>
        <Title>About?</Title>
        <Wrapper>
          <Word>Sometimes finding housing for internships is a hassle.
          </Word>
          <Word> Due to the lack of convience, this app was created </Word>
          <Word>so students can find housing for 2 - 9 months.</Word>

          <MediaContainer>
            <div>
              <GoLink href="https://twitter.com/JW_Altidor" target="_blank">
                <Word>
                  <i class="fab fa-twitter"></i>
                </Word>
              </GoLink>
            </div>
            <div>
              <GoLink href="https://medium.com/@JW_Altidor" target="_blank">
                <Word>
                  <i class="fab fa-medium"></i>
                </Word>
              </GoLink>
            </div>

          </MediaContainer>
        </Wrapper>

      </div>
    )
  }
}
const Word = styled.p `
font-size:3.5rem;
text-align:center;

`

const GoLink = styled.a `
text-decoration:none;
color:blue;
&:hover{
  color:red;
}

`

const MediaContainer = styled.div`
display:flex;

`