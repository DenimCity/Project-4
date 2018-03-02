import React, {Component} from 'react'
import axios from 'axios'
import AtlEventInfo from '../MeetUpApi/AtlEventInfo'
import NewYorkEventInfo from '../MeetUpApi/NewYorkEventInfo'
import {Title} from '../../basicstyledcomponents/basicComponents'

export default class MeetUpApiCalls extends Component {

  state = {
    atlEvents: [],
    newYorkEvents: [],
    miamiEvents: [],
    laEvents: []
  }

  atlantaApiCall= () => {
    axios.get('homecoming/meetups/atlanta').then(response=>{
      const atlEvents = response.data
      console.log('data fora atlanta ', atlEvents )
      this.setState({atlEvents})
    })
    
  }
  newYorkApiCall= () => {
axios.get('/homecoming/meetups/newyork').then(response=> {
  const newYorkEvents = response.data
  this.setState({newYorkEvents})
})
    
  }
  miamiApiCall= () => {
axios.get('/homecoming/meetusp/miami').then(response=>{
  const miamiEvents = response.data
  this.setState({miamiEvents})
})
    
  }
  losAngelesApiCall= () => {
axios.get('homecoming/meetups/la').then(response=>{
  const laEvents = response.data
  this.setState({laEvents})
})
    
  }



  componentWillMount = () => {
  this.atlantaApiCall()
  this.newYorkApiCall()
  }

  render() {
   

    return (
      <div>
        <Title>Atlanta Events</Title>
        <AtlEventInfo atlEvents={this.state.atlEvents}/>
        <Title>New York</Title>
        <NewYorkEventInfo newYorkEvents={this.state.newYorkEvents}/>
        

        <Title>Los Angeles</Title>
        <Title>New York</Title>
      </div>
    )
  }
}
