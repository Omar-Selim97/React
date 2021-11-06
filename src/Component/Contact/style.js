import styled from "styled-components";
import myImage from '../../assets/mountain.jpg';

export const Back = styled.div `
background-image: url(${myImage});
width: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`
export const Cont = styled.div `
background: linear-gradient(  45deg, rgba(213,55,0,0.8), rgba(0,77,255,0.8));
width: 100%;
 min-height: 100vh;
 display: flex;
  justify-content: center;
  align-items: center;

`
export const Heading = styled.h2 `
   display: block;
    font-family: Poppins-Bold;
    font-size: 39px;
    line-height: 1.2;
    text-align: center;
    padding-bottom: 20px
`
export const Form = styled.form `
border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  text-align:center;
  
`
export const Input = styled.input `
width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  
`
export const Submit = styled.input `
width: 50%;
background: linear-gradient(45deg, aqua, blue);
color: white;
padding: 12px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
`