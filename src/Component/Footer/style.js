import styled from "styled-components";
import { keyframes } from 'styled-components';
export const Foot = styled.footer `
display: flex;
    justify-content: center;
    align-items: center;
    
`
export const P = styled.p `
margin-top:20px;
font-size: 25px;
    line-height: 1.8;
    letter-spacing: 2px;
    padding:10px;
    &:hover{
        color:#777;
    };
`
const rotate = keyframes `
0%, 100% {
    bottom: 0;
  }
  50% {
    bottom: 100px;
  }

`;
export const Top = styled.a `
color:#0d6efd;
&:hover{
    color:#03a9f4;
};
position: relative;
left: 0;
bottom: 0;
animation: ${rotate} 2s ease infinite ;
`
export const Heart = styled.span `
color:red;

`