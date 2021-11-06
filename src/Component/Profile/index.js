import React from 'react';
import {Resume,List,Item,ItemSpan,Hading,HeadSpan,Text,Bar,Sub,Prog,Precentage,Parent,Child} from './style.js';
import Fade from 'react-reveal/Fade';

 const Profile=()=> {
    return (
        <div id='Resume'>
           <div className="container">
            <Fade left>
               <Resume>
                    <div className="info">
                        <Hading> <HeadSpan> My</HeadSpan> Resume</Hading>
                        <List>
                            <Item>
                                <ItemSpan>Name  </ItemSpan>
                                Omar Selim
                            </Item>
                            <Item>
                                <ItemSpan>E-mail  </ItemSpan>
                                medo.selis@gmail.com
                            </Item>
                            <Item>
                                <ItemSpan>Phone  </ItemSpan>
                                01032721050
                            </Item>
                            <Item>
                                <ItemSpan>Brithday  </ItemSpan>
                                16-1-1997
                            </Item>
                            <Item>
                                <ItemSpan>Education  </ItemSpan>
                               Mechanical Engineering
                            </Item>
                        </List>
                        </div>
                    <Prog>
                        <Hading> My <HeadSpan>Skills</HeadSpan>  </Hading>
                        <Text>Some of My Front-End Skills with my progress</Text>
                        <Bar>
                            <Sub>Bootstrap</Sub>
                            <Precentage>70% </Precentage>
                            <Parent>
                                <Child className='sp1'>

                                </Child>
                            </Parent>
                        </Bar>
                        <Bar>
                            <Sub>React-js</Sub>
                            <Precentage>80% </Precentage>
                            <Parent>
                                <Child className='sp2'>

                                </Child>
                            </Parent>
                        </Bar>
                        <Bar>
                            <Sub>Sass </Sub>
                            <Precentage>85%</Precentage>
                            <Parent>
                                <Child className='sp3'>

                                </Child>
                            </Parent>
                        </Bar>
                    </Prog>
                      
               </Resume>
               </Fade> 
           </div>
        </div>
    )
}
export default Profile