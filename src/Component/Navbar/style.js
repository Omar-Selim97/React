import styled from 'styled-components';

export const Logo = styled.div `
font-weight: 700;
font-size: 25px;
cursor: pointer;

`


export const List = styled.ul `
width: 60%;
list-style: none;
margin-top: -30px;
float: right;
`

export const Li = styled.li `
display: inline-block;
margin-left: 20px;
`

export const Hl = styled.a `
text-decoration: none;
font-size: 18px;
font-weight: bold;
color: #fff;
transition: 0.3s;
&:hover{
    color:#777;
}
`