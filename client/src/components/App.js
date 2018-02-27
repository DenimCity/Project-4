import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'
//importing components
import Homepage from './HomePage'
import AboutPage from './AboutPage'
import CitiesList from './CitiesList'
import SingleCity from './SingleCity'
// import HouseList from './HouseList'
import HostForm from './HostForm'

//import styled components
import NavBar from '../basicstyledcomponents/NavBar'
class App extends Component {
  state = {
    users: {},
    cities:[],
    events: []
  }

  userFromServer = () => {
    // console.log('here from the user data route');
    axios
      .get('/homecoming/user/profile')
      .then(response => {
        const users = response.data
        // console.log('the user data on the sever side', users)
        this.setState({users})
      })
  }

  citiesFromServer = () => {
    // console.log(`here from the citie server api call`)
    axios
      .get('/homecoming/city/')
      .then(response => {
        const cities = response.data
        // console.log('cities data', cities)
        this.setState({cities})
      })
  }

  eventsApi = () => {
    // console.log(`here from third party api`)
    axios
      .get('')
      .then(response => {
        const events = response.data
        this.setState({events})
      })
  }

  componentWillMount = () => {
    this.userFromServer()
    this.citiesFromServer()
  }

  render() {
    const CityData = (props) => (<CitiesList CityInfo={this.state.cities}{...props}/>)
    // console.log(`the city is being transfered'${CityData }`)
    return (
      <div>
        <NavBar/>
      <Router>
        <Switch>

          <Route exact path="/" component={Homepage}/>
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/cities" component={CityData}/>
          <Route exact path="/cities/:cityId" component={SingleCity}/>
          {/* <Route exact path="/cities/cityId/house" component={HouseList}/> */}
          <Route exact path="/hosting" component={HostForm}/>

        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
