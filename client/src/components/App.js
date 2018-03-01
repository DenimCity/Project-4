import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'
//importing components
import Homepage from './HomePage'
import AboutPage from './AboutPage'
import CitiesList from './CitiesList'
// import SingleCity from './SingleCity'
import HouseList from './HouseList'
import HouseForm from './HouseForm'
import MeetUpApiCall from './MeetUpApi/MeetUpApiCall'
import SignIn from './SignIn'

//import styled components
import NavBar from '../basicstyledcomponents/NavBar'
class App extends Component {
  state = {
    users: {},
    cities: []
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
    // console.log(`here from the city server api call in react`)
    axios
      .get(`/homecoming/city/`)
      .then(response => {
        const cities = response.data
        // console.log(`all cities data ${cities}`)
        this.setState({cities})
      })
  }

 

  

  componentWillMount = () => {
    this.userFromServer()
    this.citiesFromServer()
  }

  render() {
    const CityData = (props) => (<CitiesList {...props} CityInfo={this.state.cities}/>)
    const HousesData = (props) => (<HouseList {...props} />)

    return (
      <div>
        <NavBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/cities" component={CityData}/>
            <Route exact path="/cities/:cityId/houses" component={HousesData}/>
            <Route exact path="/meetups" component={MeetUpApiCall}/>
            <Route exact path="/hosting" component={HouseForm}/>
            <Route exact path="/signin" component={SignIn}/>

          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
