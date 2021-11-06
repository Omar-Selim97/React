import styled from 'styled-components';
export const Resume = styled.div `
display:grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 20px;
@media (max-width: 768px) {
    grid-template-columns:repeat(1,1fr) ;
  };
overflow: hidden;
`
export const Hading = styled.h3 `
font-size: 30px;
font-weight: bolder;
@media(max-widht: 700px) {
    font-size: 25px;
}
`
export const HeadSpan = styled.span `
color: #0d6efd;
`
export const List = styled.ul `
list-style: none;
`
export const Item = styled.li `
margin-bottom: 8px;

`
export const ItemSpan = styled.span `
font-weight: bold;
display: inline-block;
width: 100px;
`
export const Text = styled.p `
color: #777;
   line-height: 1.7;
   letter-spacing: 2px;
`
export const Bar = styled.div `
overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px;
`
export const Sub = styled.span `
float: left;
`
export const Prog = styled.div `
background-color: #9e9e9e14;
color: #777;
`

export const Precentage = styled.span `

    float: right;
    margin-right: 100px;
`
export const Parent = styled.div `
height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
`
export const Child = styled.span `
background: #0d6efd;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
`