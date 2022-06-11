import styled from "styled-components";


export const Pokedex= styled.div`

font-family: 'VT323', monospace;
display: flex;
align-items: center;
margin-left: 25em;
width: 100%;
height:100vh;

`

export const Aux= styled.div`

width: 100%;

`
export const Inter= styled.div`

width:15%;
margin-top: 13em;
margin-left: -20em;

display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;


`


export const ContInter= styled.div`

margin-top:-31em;
width: 40%;

`
export const ImageInter= styled.div`

margin-top: -36em;
margin-left: 17em;
width:20%;
img{
    
    width:100%;
    height:100px;
}

`

export const PokeDexImg= styled.img`
width: 100%;

`