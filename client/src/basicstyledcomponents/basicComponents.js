import styled from 'styled-components'

export const Title = styled.h1`
font-family:'Shadows Into Light', cursive;
text-align:center;
color:#C34C29;
font-size:2rem;
font-style:italic;
`
export const Title2 = styled.h2`
font-family:'Shadows Into Light', cursive;
text-align:center;
color:goldenrod;
font-size:3rem;
font-style:italic;
`
export const Title3 = styled.span`
font-family: 'Shrikhand', cursive;
font-size:4rem;
color:black;
`

export const PageTitle = styled.h1`
font-size: 2.5rem;
text-decoration: underline;
font-family:'Shadows Into Light', cursive;
color:white;

`

export const Form = styled.form`
  display : flex;
  flex-direction: column;
  justify-content: center;
`
export const Wrapper = styled.form`
  display:flex;
flex-direction:column;
align-items:center;
`

export const CityImages = styled.img`
border-radius:6px;
width: 60vw;
height: 30vh;
@media (max-width: 669px){
  width: 100%;
}
`
export const Image = styled.img`
border-radius:6px;
width:100%;

`

export const TableWrapper = styled.div `
display:flex;
justify-content:center;
flex-direction:column;

`
export const Table = styled.div `
   border: 1px black solid;
    padding: 7px;
    display: flex;
    color: black;
    justify-content: space-between;
    background-color: white;
    color: black;
    width: auto;
`

export const Column = styled.div `
    text-align: left;
`
export const ColumnTitle = styled.div `
    padding-bottom: 8px;
`

export const Holder = styled.div `
    padding: 5px 0;
`
export const LinkWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
` 

export const LinkTag = styled.a`
color:red;

&:hover{
  color:goldenrod;
}

`