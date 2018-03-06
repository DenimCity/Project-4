import React from 'react'
import styled from 'styled-components'
import { LinkWrapper, PageTitle} from './basicComponents'
// import {LinkWrapper} from './'
const NavBar = () => {
  return (
    <Nav>
      <div>
        <PageTitle>HomeComing</PageTitle>
      </div>
      <LinkWrapper>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/cities">Cities</a>
      <a href="/meetups">Events</a>
      {/* <a href="/signin">Sign In</a> */}
      <a href="/hosting"><span>Become a Host?</span></a>
      </LinkWrapper>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div `
background-color:#0D441D;
border-bottom: 1px solid #EAEAEB;
text-align:center;
width:100%;
min-height:200px;
display:flex;
justify-content:center;
align-items:center; 
flex-direction:column;
a{ 
  
  clear:right;
  text-decoration: none;
  color:gray;
  margin: 0 10px;
  line-height: 70px;
  font-size:2rem;
  font-family:'Passion One', cursive;
  &:hover{
    color:white;
  }
  }
  span{
    color:red;
    &:hover{
      color:goldenrod;
    }
  }

`




