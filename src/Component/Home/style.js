import styled from 'styled-components';

export const Landing = styled.div `
    background-color:#555;
    text-align:center;
    position:relative;
    height:width: fit-content;
    
    
    `
export const Content = styled.div `
    display:grid;
    grid-template-columns:repeat(2,1fr) ;
    grid-gap:5%;
    @media (max-width: 850px) {
        grid-template-columns:repeat(1,1fr) ;
        text-align:center;
      }
`
export const Info = styled.div `
    padding:20px;
`
export const Heading = styled.h1 `
color: darkorange;
font-size:35px;
letter-spacing:2px;
@media (max-width: 768px) {
    font-size:25px;
}
`
export const Text = styled.p `
color: #EEE;
font-size:18px;
line-height:1.7;
letter-spacing:2px;
@media (max-width: 768px) {
    font-size:14px;
}
`
export const Button = styled.button `
background: linear-gradient(45deg, aqua, blue);
padding:20px;
border-radius: 6px;
cursor: pointer;
border-color: transparent;
`
export const My = styled.div `
    text-align:center;
`
export const Image = styled.img `
width:fit-content;
height:fit-content;
border:1px solid transparent;
margin-top:50px;
@media (max-width: 1000px) {
    margin-top:180px;
};
@media (max-width: 850px) {
    display:none;
    
  }
`