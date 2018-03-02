import React, {Component} from 'react'
import styled from 'styled-components'
import {Title, Title2} from '../../basicstyledcomponents/basicComponents'
export default class HouseForm extends Component {

  // state = {   houses: [],   showOwnerField: false } toggleField =
  // (showOwnerField) => {   const viewField = !this.state.showOwnerField
  // this.setState({showOwnerField}) } handlChange = (e) => {
  // console.log(this.state.houses); }

  render() {
    return (
      <div>
        <Title>Is your home a great location for an Intern?</Title>
        <Title2>Want to join our community?</Title2>
        <Title3>we are still in the beta phases but stay tuned</Title3>
        <Container>
        <Coming>
        <img src="https://i.imgur.com/GGk7qYB.png" alt=""/>
        </Coming>
        </Container>
      </div>
    )
  }
}

const Title3 = styled.h4 `
color:blue;
text-align:center;
font-size:2.4rem;
text-decoration:underline;
`
const Coming = styled.div`
display:flex;
justify-content:center;
max-width: 34rem;
flex-direction:row;
img {
  width:100%;
}

`
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;

`
// const Container = styled.div `
{/* <Container>
  <Title>Wanting to Post Your House?</Title>
  <Title2>Here is where you submit that info..</Title2>

  {/* <Form action="" method="get">
    <label htmlFor="">YEs</label>
    <div>
      <input type="text" placeholder="trust"/></div>

  </Form> */
}
{/* </Container> */
}
// display:flex; flex-direction:column; justify-content: center;
// align-items:center; `
