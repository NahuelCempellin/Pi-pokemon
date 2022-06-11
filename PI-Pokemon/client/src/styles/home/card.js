import styled from "styled-components";

export const CardContainer= styled.div`
border: 1px solid black;
width: 15em;
height: 20em;
border-radius:10px;
background-color: white;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
overflow:hidden;
img {
    width:100%;
    height:200px;
    overflow: hidden;
}


`

export const DownBall= styled.div`
h2{
    margin-top: 0.2em;
}
height:100%;
color: white;
background-color: red;
hr{
    height:10px;
    border:1px solid black;
    background-color: black;
}

`
export const Circle= styled.div`
    margin-left: 6em;
    margin-top:-3em;
    width: 50px;
    height: 50px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: white;
    border:3px solid black;
    display:flex;
    justify-content: center;
    align-items:center;
div{

    width: 25px;
    height: 25px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: white;
    border:1px solid black;
    box-shadow: 2px 11px 27px -5px rgba(0,0,0,0.65);
-webkit-box-shadow: 2px 11px 27px -5px rgba(0,0,0,0.65);
-moz-box-shadow: 2px 11px 27px -5px rgba(0,0,0,0.65);
}

`