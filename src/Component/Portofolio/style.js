import styled from "styled-components";
export const Port = styled.div `

overflow: hidden;
`
export const Title = styled.h2 `
    font-size:35px;
    text-align:center;
`
export const Span = styled.span `
font-weight: normal;
`
export const List = styled.ul `
    list-style:none;
    text-align:center;
    margin:20px 0;
`
export const Item = styled.li `
display:inline-block;
padding:10px;
width:100px;
background:${props=>props.active?'#0d6efd': ''} ;
color:${props=>props.active?'#fff': ''};

`
export const Cont = styled.div `
display: grid;
grid-template-columns: repeat(4,1fr);
@media (max-width: 700px) {
    grid-template-columns:repeat(1,1fr) ;
    text-align:center;
  };
  @media (max-width: 950px) {
    grid-template-columns:repeat(2,1fr) ;
    text-align:center;
  };
  @media (max-width: 650px) {
    grid-template-columns:repeat(1,1fr) ;
    text-align:center;
  }


`
export const Part = styled.div `
position: relative;
min-width:25%;
font-size:0;
&:hover>div{
    opacity:1;
    
}
`
export const Image = styled.img `
width:100%;
border-raduis:10px;

`
export const Overlay = styled.div `
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
font-size: 15px !important;
opacity: 0;
background-color: rgba(36, 84, 255, 0.5);

`

export const OverlaySpan = styled.span `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
display:block;
cursor: pointer;
padding: 10px 20px;
color:#777;
 border: 2px solid transperant;
background-color:#0dcaf0;

`