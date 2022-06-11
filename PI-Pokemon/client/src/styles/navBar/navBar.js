import styled from 'styled-components';

export const Navcontainer= styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
// border:1px solid black;
box-shadow: 1px 6px 15px -1px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 6px 15px -1px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 6px 15px -1px rgba(0,0,0,0.75);

`

export const Logo= styled.img`
width: 25em;
height:10em;

`


export const LandingCont= styled.div`
margin-top: 5em;
display: flex;
flex-direction: row;
justify-content: space-between;

width: 100%;
height:50%;



`
export const Image= styled.img`

width: 80%;
height:90%;

`

export const ImgCont= styled.div`



`

export const Intermediate= styled.div`
border: 1px solid black;

`

export const TittleCont= styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
margin-left: 5em;


`

export const Button= styled.button`

    border-color: #000;
    padding: 0.6em 2.3em;
    cursor: pointer;
    font-size: 1em;
    color: #000;
    background-color: transparent;
    background-image: linear-gradient(45deg, transparent 50%, #000000 50%);
    background-position: 25%;
    background-size: 400%;
    -webkit-transition: background 500ms ease-in-out, color 500ms ease-in-out;
    transition: background 500ms ease-in-out, color 500ms ease-in-out;
  
  
  :hover {
    color: #ffffff;
    background-position: 100%;
  

`

