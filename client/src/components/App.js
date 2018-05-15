import React, {Component} from 'react';
import '../App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//importing components
import Homepage from './HomePage'
import AboutPage from './AboutPage'
import CitiesList from '../components/CityFolder/CitiesList'
import HouseList from '../components/HouseFolder/HouseList'
import HouseForm from '../components/HouseFolder/HouseForm'
import MeetUpApiCall from './MeetUpApi/MeetUpApiCall'
import HomePending from '../components/HouseFolder/HomePending'

//import styled components
import NavBar from '../basicstyledcomponents/NavBar'
class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/cities" component={CitiesList}/>
            <Route exact path="/cities/:cityId/houses" component={HouseList}/>
            <Route exact path="/meetups" component={MeetUpApiCall}/>
            <Route exact path="/hosting" component={HouseForm}/>
            <Route exact path="/housepending" component={HomePending}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
