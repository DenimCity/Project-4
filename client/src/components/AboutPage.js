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
          <Word>  Due to the lack of convience, we decided to bridge the gap. </Word>
          <Word>Here students will be able to find housing close to their assigned sites.</Word>

          <MediaContainer>
            <div>
              <GoLink href="https://twitter.com/JW_Altidor" target="_blank">
                <Word>
                  <i class="fab fa-twitter"></i>
                </Word>
              </GoLink>
            </div>
            <div class="link container">
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
font-size: 15px;
text-align:center;

`

const GoLink = styled.a `
text-decoration:none;
color:orange;
&:hover{
  color:red;
}

`
const MediaContainer = styled.div`
display:flex;

`