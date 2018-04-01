import React, {Component} from 'react'
import styled from 'styled-components'

export default class House extends Component {

  state = {
    ownerShowing: true
  }

  handleClick(event) {
    this.toggleOwner()
  }

  toggleOwner = () => {
    const {ownerShowing} = this.state
    this.setState({
      ownerShowing: !ownerShowing
    })
  }

  render() {
    const {house} = this.props
    if (this.state.ownerShowing) {
      return (
        <OwnerCard className="OwnerCard">
          <TextAlign>
            <HouseContainer>
              <HousePhoto src={house.house_photo} alt="house"/>
            </HouseContainer>
            <div>
              <strong>Description</strong>
            </div>
            <div>{house.description}</div>
            <strong>Amenities</strong>
            <div>{house.amenities}</div>
            <strong>Address</strong>
            <div>{house.address}</div>
            <strong>Price</strong>
            <div>{house.price}/month</div>
            <br/>
            <button onClick={() => this.toggleOwner()}>View Owner</button>
            {/* <a href={`/cities/:cityId/houses/:${house._id}`} >View Owner</a> */}
          </TextAlign>
        </OwnerCard>
      )
    }
    return (
      <OwnerCard className="OwnerCard">

        <OwnerPhoto src={house.owner_photo} alt="owner"/>

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
              <div>
                <a href={`tel:+${house.owner_phone}`}>Call</a>
              </div>
            </div>
            <div>
              <a href={`mailto:${house.owner_email}?Subject=House%20Posting`}>eMail</a>
            </div>
            <button onClick={() => this.toggleOwner()}>View House</button>
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
max-width:500px;
height: 45vh;
@media (max-width: 669px){
  height: 60vh;
}
`

const HouseContainer = styled.div `
/* width:10vw; */

`

const OwnerPhoto = styled.img `
width:100%; 
height:30vh;
@media (max-width: 669px){
  width: 100%;
}

`

const HousePhoto = styled.img `
width:100%;
height:30vh;

`

//keys to use later
{/* <div><img width="100%" src={house.kitchen} alt=""/></div>
<div><img width="100%" src={house.bathroom} alt=""/></div>
<div><img width="100%" src={house.livingroom} alt=""/></div> */
}
