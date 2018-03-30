import React, {Component} from 'react'
import {Title} from '../basicstyledcomponents/basicComponents'
import styled from 'styled-components'
import { getUser } from './api/getHub'

const renderLine = (user, key) => <li key={key}>
  <b>{key}</b>: {user[key]}</li>
class HomePage extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    getUser('vnglst').then(data => {
      this.setState({user: data.entity})
    })
  }

  render() {
    const {user} = this.state
    return (
      <div>
        <Title>Make finding your housing for internships
        </Title>
        <Title>a piece of cake . . .
        </Title>
        <HomeBody>
          <img src="https://i.imgur.com/GhgBxx9.jpg" alt=""/>
        </HomeBody>

        <ul style={{listStyle: 'none'}}>
          {Object.keys(user)
            .map(key => renderLine(user, key))
            }
        </ul>
      </div>
    )
  }
}

const HomeBody = styled.div `
display:flex;
flex-direction:column;
img {
  width:100%;
}

`

export default HomePage