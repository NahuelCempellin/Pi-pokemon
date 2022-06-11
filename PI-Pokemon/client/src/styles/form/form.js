import styled from 'styled-components';

export const H1= styled.div`

margin-top:0;
border: 1px solid rgb(218,171,45);
width: 100%;
color: white;
padding:2em;
background: rgb(218,171,45);
    background: radial-gradient(circle, rgba(218,171,45,1) 19%, rgba(251,63,63,1) 86%);

`

export const FormCont= styled.div`
overflow: hidden;
background-color: white;
border-radius: 5% 5% 0 0 ;
border: 1px solid black;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
margin-top: 0.5em;
width: 50%;
height: 80vh;
margin-left: 20em;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


`

export const DivGrid= styled.div`


width: 90%;
height: 15em;
margin-top: 2em;
margin-left: 3em;
div{
    margin-top: 2em;
}

display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(7, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
input{
    width: 20%;
}

.err{
    color: red;
}

`

export const FirstDiv= styled.div`

display: flex;
justify-content: space-around;
margin-top: 4em;
.err{
    color: red;
}

`

export const ButtonCont= styled.div`

display:flex;
margin-top: 2em;
justify-content: space-around;

button{
    border: 1px solid transparent;
    color: white;
    border-radius: 7px;
    background: rgb(218,171,45);
    background: radial-gradient(circle, rgba(218,171,45,1) 19%, rgba(251,63,63,1) 86%);
    padding: 1em;
    
}
`

export const UlPoke= styled.ul`

display: flex;
li{
    
    list-style: none;
    width: 90px;
    height: 20px;
    background-color: rgba(255,255,255,0.3);
    backdrop-filter: blur(20px);
    
    
}
button{
 color: white;
 background-color: red;
 border: 1px solid black;       
}
`

export const UlCont= styled.ul`
display: flex;


`