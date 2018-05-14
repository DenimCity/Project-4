import React, {Component} from 'react'
import axios from 'axios'
import AtlEventInfo from '../MeetUpApi/AtlEventInfo'
import LaEventInfo from '../MeetUpApi/LaEventInfo'
import MiamiEventInfo from '../MeetUpApi/MiamiEventInfo'
import NewYorkEventInfo from '../MeetUpApi/NewYorkEventInfo'
import {Title} from '../../basicstyledcomponents/basicComponents'
import styled from 'styled-components'

import * as meetUpservices from '../MeetUpApi/ApiCalls'
export default class MeetUpApiCalls extends Component {

  state = {
    atlEvents: [],
    newYorkEvents: [],
    miamiEvents: [],
    laEvents: [],
    isLoading: true
  }


  
  atlantaApiCall = () => {
    axios
      .get('homecoming/meetups/atlanta')
      .then(response => { 
        this.setState({ atlEvents: response.data,  isLoading: false })
      })

  }
  newYorkApiCall = () => {
    axios
      .get('/homecoming/meetups/newyork')
      .then(response => {
        this.setState({ newYorkEvents: response.data, isLoading: false })
      })

  }
  miamiApiCall = () => {
    axios
      .get('/homecoming/meetups/miami')
      .then(response => {
        this.setState({ miamiEvents: response.data, isLoading: false })
      })

  }

 
  losAngelesApiCall = () => {
    axios
      .get('homecoming/meetups/la')
      .then(response => {
        this.setState({ laEvents: response.data, isLoading: false })
      })

  }
  componentWillMount = () => {
    
    setTimeout(() => {
      
      this.atlantaApiCall()
      this.newYorkApiCall()
      this.miamiApiCall()
      this.losAngelesApiCall()
    }, 90);

  }

  render() {

    if (this.state.isLoading) {
      return <Loading>
        <img
          src="https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif"
          alt=""/>
      </Loading>
    }
    return (
      <div>
        <Title>ATL Events</Title>
        <AtlEventInfo atlEvents={this.state.atlEvents}/>
        <Title>NY Events</Title>
        <NewYorkEventInfo newYorkEvents={this.state.newYorkEvents}/>
        <Title>MIA Events</Title>
        <MiamiEventInfo miamiEvents={this.state.miamiEvents}/>
        <Title>LA Events</Title>
        <LaEventInfo laEvents={this.state.laEvents}/>
      </div>
    )
  }
}

const Loading = styled.div `
display: flex;
    justify-content: center;
    flex-wrap: wrap;

`