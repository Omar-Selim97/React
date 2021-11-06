import styled from "styled-components";
import myImage from '../../assets/tour.jpg';
export const AboutME = styled.div `
height: 500px;
    background: url(${myImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow: hidden;
}
`
export const Info = styled.div `
    float:left;
    width: 50%;
    padding-top:6#0096880px;
`
export const Head = styled.h2 `
font-weight: bold;
font-size: 40px;
color: #fff;
@media (max-width: 768px) {
    font-size:30px;
}
`
export const Heading = styled.h4 `
font-weight: bold;
font-size: 35px;
color: darkorange;
@media (max-width: 768px) {
    font-size:25px;
}
`
export const Text = styled.p `
   
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 15px;
    line-height: 1.8;
    font-size:18px;
`