import React, {Component} from 'react'
import styled from 'styled-components'

export default class House extends Component {

  state = {
    ownerShowing: false
  }

  handleClick = (event) => {

    this.toggleOwner()
  }
  toggleOwner = () => {
    const ownerShowing = !this.state.ownerShowing
    // this.setState({ownerShowing})
  }

  render() {
    const {house} = this.props
    return (
      <OwnerCard className="OwnerCard">
        <TextAlign>
          <div>
            <img width="100%" src={house.house_photo} alt="house"/>
          </div>
          <div>
            <strong>Description</strong>
          </div>
          <div>{house.description}</div>
          <strong>Amenities</strong>
          <div>{house.amenities}</div>
          <strong>Address</strong>
          <div>{house.address}</div>
          <div>{house.price}/month</div>
        </TextAlign>
        {/* <button onClick={()=>this.toggleOwner("ownerShowing")}></button>
          {!this.state.ownerShowing ? <div> </div> : <div> banana</div> } */}
        <img  src={house.owner_photo} alt="owner"/>
        <OwnerInfoWrapper className="ownerInfoWrapper">
          <Container className="container">
            <div>
              <strong>Owner</strong>
            </div>
            <div>
              {house.owner}
            </div>
          </Container>
          <Container>
            <div>
              <strong>Contact</strong>
            </div>
            <div>
              <div>{house.owner_phone}</div>
            </div>
          </Container>
        </OwnerInfoWrapper>
      </OwnerCard>
    )
  }
}
const OwnerInfoWrapper = styled.div `
display:flex;
justify-content: center;
margin: 5px;
text-align: center;
`
const Container = styled.div `
display: flex;
flex-direction: column;
justify-content:center;
align-content:center;
margin: 0px 30px;
`

const TextAlign = styled.div `
text-align:center;
`

const OwnerCard = styled.div `
border: 1px solid;
box-shadow: 2px 3px 3px 3px grey;
`

//keys to use later
{/* <div><img width="100%" src={house.kitchen} alt=""/></div>
<div><img width="100%" src={house.bathroom} alt=""/></div>
<div><img width="100%" src={house.livingroom} alt=""/></div> */
}
