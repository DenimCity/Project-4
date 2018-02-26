import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  state = {
    users:[],
    cities:[],
    events:[],
  }

  userFromServer = () =>{
    console.log('here from the user data route');
    axios.get('/homecoming/user/profile').then(response =>{
      const users = response.data
      console.log(`the user data on the sever side, ${users}`)
      this.setState({users})
    })
  }


  citiesFromServer = () =>{
    console.log('here from the citie server api call')
    axios.get('/homecoming/city/').then(response => {
      const cities = response.data
      console.log('cities data', cities)
    })
  }

  eventsApi = () => {
    console.log('here from third party api')
    axios.get('').then(response => {
      const events = response.data
      this.setState({events})
    })
  }

  componentWillMount = () => {
    this.userFromServer()
    this.citiesFromServer()
  }
  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
