import React, {Component} from 'react'
import House from './House'
import HouseForm from './HouseForm'
import styled from 'styled-components'
import axios from 'axios'

export default class HouseList extends Component {

  state = {
    houses: []
  }

  componentWillMount() {
    this.housesFromServer(this.props.match.params.cityId)
  }

  housesFromServer = (cityId) => {
    console.log('from the houses route')
    axios
      .get(`/homecoming/city/${cityId}/houses`)
      .then(response => {
        const houses = response.data
        console.log(`the houses data ${houses}`)
        this.setState({houses})
      })
  }

   createAHouse = async(cityId) => {
    console.log('here from the create user route');
    // const response = await axios.post(`/${cityId}/houses/new`)
    const response = await axios.post(`/cityId/houses/new`, cityId)
 
    const newHouse = response.data
    const houses = [...this.state.houses]
    houses.push(newHouse)
    this.setState({houses})
  }
// working on delete route
  //
  // deleteAHouse = async(houseId) => {
  //   console.log('we hit the delete route')
  //   const response = await axios.post()
  // }

  render() {
    const makeNewHouse = () => (<HouseForm createHouse={this.createAHouse}/>)
    const housesList = this
      .state
      .houses
      .map((house, index) => {
        return (<House key={index} house={house}/>)
      })
    return (
      <HouseWrapper className="houeWrapper" >
        <HouseContainer className="HoueContainer">
          {housesList}
        </HouseContainer>
      </HouseWrapper>
    )
  }
}


const HouseContainer = styled.div`
display:grid;
grid-template-columns:auto auto;
max-width: 63.2rem;
    grid-gap: 2rem;
    padding: 3rem 0rem;

@media (max-width: 669px) {
  grid-template-columns:auto;
padding:0rem;
  }

`

const HouseWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: center;
flex-direction:row;

`