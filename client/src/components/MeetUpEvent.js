import React, {Component} from 'react'
import axios from 'axios'

export default class MeetUpEvents extends Component {

  // state = {
  //   events: []
  // }

  // meetUpEvents = () => {

  //   const api_key = process.env.REACT_APP_MEETUP_KEY
  //   console.log(`api key is here => ${api_key}`);
  //   axios
  //     .get(`https://api.meetup.com/find/groups?key=${api_key}&photo-host=public&location=Atlanta%2CGa&page=20&sig_id=245595678&sig=6cf7a038a4f9a98787a82fcf8aae96915e2a55eb`)
  //     .then(response => {
  //       const events = response.data
  //       console.log('data from meet up', events)
  //       this.setState({events})
  //     })
  // }
  // componentWillMount = () => {
  //   this.meetUpEvents()
  // }

  render() {

    return (
      <div>
        hello from the meetup events page
      </div>
    )
  }
}
