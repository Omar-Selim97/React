import styled from 'styled-components';
export const Skills = styled.div `

`
export const Contain = styled.div `

`
export const Part = styled.div `
transition: 0.5s;
&:hover{
    transform: translateY(-20px);
}
`
export const Head = styled.button `
    max-width:200px;
    cursor:pointer;
        position:relative;
        padding:10px 20px;
        background:white;
        font-size:28px;
        border-top-right-radius:10px;
        border-bottom-left-radius:10px;
        transition:all 1s;
        &:after,&:before{
            content:" ";
            width:10px;
            height:10px;
            position:absolute;
            border :0px solid #fff;
            transition:all 1s;
            }
        &:after{
            top:-1px;
            left:-1px;
            border-top:5px solid black;
            border-left:5px solid black;
        }
        &:before{
            bottom:-1px;
            right:-1px;
            border-bottom:5px solid black;
            border-right:5px solid black;
        }
        &:hover{
            background: linear-gradient(
                45deg
                ,aqua,blue);
            color:#777;
            border-top-right-radius:0px;
        border-bottom-left-radius:0px;
            // background:rgba(0,0,0,.5);
            // color:white;
            &:before,&:after{
                
                width:100%;
                height:100%;
                // border-color:white;
            }
        }
    
`
export const Icon = styled.i `
   
`
export const Image = styled.img `

`

export const Line = styled.hr `
width:50%;
margin-top:10px;
border-color:steelblue;

`
export const Text = styled.p `
line-height: 1.7;
letter-spacing: 2px;
font-size:18px;
color:#777;

`
export const Ancor = styled.a ``