import React , {Component} from 'react';
import {Landing, Content,Info,Heading,Text,Button,Image,My} from './style.js';
import myImage from '../../assets/omar.png';
import withReveal from 'react-reveal/withReveal';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
 class Home extends Component  {

    render(){
        const Title = withReveal(styled.h1`
        font-size: 1.5em;
        text-align: center;
        font-weight:700;
  
      `, <Fade left/>);
        return (
            <Landing className="bg-dark">
                <div className="container">
                    <Content>
                        <Info>
                            <Heading>
                                <Title className='text-info'>
                                I'm Full Stack Developer
                                </Title>
                            </Heading>
                            <Text>I have an experience of 2 years in front-end development...and i have many projects in this field.<br/>
                                    I'm also good in back-end and server side (i use node-js and express as freamwork).<br/>
                                    i can build landing pages and wordpress themes as well.<br/>
                                    you can find me every day with 5 hours work at least.<br/>
                                    My budget bid amount is 7$ per hour.
                            </Text>
                            <Button className="btn-info">Read More</Button>
                        </Info>
                        <My>
                            <Image src={myImage}>
                                
                            </Image>
                        </My>
                    </Content>
                </div>
              
            </Landing>
        )
    }
}
export default Home