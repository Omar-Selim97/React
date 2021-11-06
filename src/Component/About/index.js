import React from 'react';
import {AboutME,Head,Heading,Info,Text} from './style.js';

 const About=()=> {
    return (
        <AboutME id='About'>
            <div className="container">
                <Info className="my-5">
                   <Head> Hello I'm Omar</Head>
                   <Heading className="text-info">I'm Full Stack Dev</Heading>
                   <Text className="pt-3 pb-3 text-light">
                   My main studies is Mechanical Engineering but since corona virus I'm trying in field of programming<br/>
                    and studied many courses in different platforms as Udacity and udemy
                   </Text>
                   <Text className="text-light">
                   I’m interested in Programming specially (Js-nodejs-react-mysql-mongdb)<br/>
                🌱I’m currently learning Wordpress Developping and php scripting language.
                   </Text>
                </Info>
            </div>
        </AboutME>
    )
}
export default About