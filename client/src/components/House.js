import React, { Component } from 'react'
// import styled from 'styled-components'

export default class House extends Component {
  render() {
    const { house } = this.props
    return (
      <div>
      <div>

        <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
  <div><img width="400px" src={house.house_photo} alt=""/></div>
  <div><img width="400px" src={house.kitchen} alt=""/></div>
  <div><img width="400px" src={house.bathroom} alt=""/></div>
  <div><img width="400px" src={house.livingroom} alt=""/></div>
  
</div>


      {/* <div class="mySlides">
      <div class="numbertext">1 / 4</div>
        <img width="400px" src={house.house_photo} alt="photo of house"/>
      </div>
      
      <div class="mySlides">  
      <div class="numbertext">2 / 4</div>
      <img width="400px" src={house.kitchen} alt="photo of kitchen"/>
      </div>

      <div class="mySlides">
      <div class="numbertext">3 / 4</div>
      <img width="400px" src={house.bathroom} alt="photo of bathroom"/>
      </div>

      <div class="mySlides">
      <div class="numbertext">3 / 4</div>
      <img width="400px" src={house.livingroom} alt="photo of living room"/>
      </div> */}
      
        </div>
        <br/>
        <div>description: {house.description}</div>
        <br/>
        <div>Amenities: {house.amenities}</div>
        <br/>
        <div>address: {house.address}</div>
        <br/>
        <div>Owner: {house.owner}</div>
        <br/>
        <img width="400px" src={house.owner_photo} alt="photo of living room"/>
        <br/>
        <p>{house.owner_phone}</p>
      </div>
    )
  }
}



// const HouseShape = styled.div`
// border:1px solid goldenrod;

// `

// const HousePictureConTainer = styled.div`
// position: relative;

// `

// const MySlides = styled.div`
// display: none;
// `

// const NumberText = styled.div`


// `