import styled from "styled-components";
export const SocialMedia = styled.div `
    display: grid;
    grid-template-columns: repeat(3,1fr);
    @media (max-width: 768px) {
        grid-template-columns:repeat(1,1fr) ;
        text-align:center;
      }
`
export const Social = styled.div `
display: flex;
box-sizing: border-box;
padding: 100px 0 100px 60px;
background-color:${props=> props.item === 1 ? '#0a66c2' :''};
background-color:${props=> props.item === 2 ? '#30363d' :''};
background-color:${props=> props.item === 3 ? 'rgb(255, 0, 0)' :''};
`
export const Icon = styled.i `
width: 50px;
height: 50px;
background-color:transperant;
text-align: center;
line-height: 0px;

margin-right: 10px;
margin-top:27px ;
color:${props=> props.item === 1 ? '#888' :''};
color:${props=> props.item === 2 ? 'aqua' :''};
color:${props=> props.item === 3 ? '#DDD' :''};
`
export const Text = styled.p `
font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #EEE;
`
export const Info = styled.span `
display: block;
  margin-bottom: 8px;
`
export const Sub = styled.span `
font-weight: normal;
`