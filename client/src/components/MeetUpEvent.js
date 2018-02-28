import React, { Component } from 'react'
import axios from 'axios'

export default class MeetUpEvents extends Component {
  
  events = () => {
    const api_key = process.env.REACT_APP_MEETUP_KEY
    axios.get('')
  }
  
  render() {
    
    
    return (
      <div>
        hello from the meetup events page
      </div>
    )
  }
}
