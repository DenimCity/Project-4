import React, {Component} from 'react'
import axios from 'axios'
import AtlEventInfo from '../MeetUpApi/AtlEventInfo'
import LaEventInfo from '../MeetUpApi/LaEventInfo'
import MiamiEventInfo from '../MeetUpApi/MiamiEventInfo'
import NewYorkEventInfo from '../MeetUpApi/NewYorkEventInfo'
import {Title} from '../../basicstyledcomponents/basicComponents'

export default class MeetUpApiCalls extends Component {

  state = {
    atlEvents: [],
    newYorkEvents: [],
    miamiEvents: [],
    laEvents: [],
    isLoaded: false
  }

  atlantaApiCall = () => {
    axios
      .get('homecoming/meetups/atlanta')
      .then(response => {
        const atlEvents = response.data
        // console.log('data fora atlanta ', atlEvents )
        this.setState({atlEvents, isLoaded: true})
      })

  }
  newYorkApiCall = () => {
    axios
      .get('/homecoming/meetups/newyork')
      .then(response => {
        const newYorkEvents = response.data
        this.setState({newYorkEvents, isLoaded: true})
      })

  }
  miamiApiCall = () => {
    axios
      .get('/homecoming/meetups/miami')
      .then(response => {
        const miamiEvents = response.data
        // console.log('data fora miami ', miamiEvents )
        this.setState({miamiEvents, isLoaded: true})
      })

  }
  losAngelesApiCall = () => {
    axios
      .get('homecoming/meetups/la')
      .then(response => {
        const laEvents = response.data
        // console.log('data fora los angeles ', laEvents )
        this.setState({laEvents})
      })

  }
  componentWillMount = () => {

    this.atlantaApiCall()
    this.newYorkApiCall()
    this.miamiApiCall()
    this.losAngelesApiCall()

  }

  render() {
    const {isLoaded} = this.props

    return (
      <div>

        {!isLoaded
          ? <div>
              <Title>ATL Events</Title>
              <AtlEventInfo atlEvents={this.state.atlEvents}/>
              <Title>NY Events</Title>
              <NewYorkEventInfo newYorkEvents={this.state.newYorkEvents}/>
              <Title>MIA Events</Title>
              <MiamiEventInfo miamiEvents={this.state.miamiEvents}/>
              <Title>LA Events</Title>
              <LaEventInfo laEvents={this.state.laEvents}/>
            </div>
          : <img src="https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif" alt=""/>}

      </div>
    )
  }
}
