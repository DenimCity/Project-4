import React, {Component} from 'react'
import axios from 'axios'
import MeetUpEventInfo from './MeetUpEventInfo'

export default class MeetUpEvents extends Component {

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
  }

  render() {
   

    return (
      <div>
        <MeetUpEventInfo atlEvents={this.state.atlEvents}/>
        <h1>data for events </h1>
      </div>
    )
  }
}
