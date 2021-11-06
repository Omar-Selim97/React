import React,{Component} from 'react';
import {SocialMedia,Social,Icon,Text,Info,Sub} from './style.js';
import axios from 'axios';

 class SocialMed extends Component  {
     state={
         social:[]
     }
     componentDidMount(){
         axios.get('js/data.json').then(res =>{
             this.setState({
                social:res.data.social
             })
         })
     }
     render(){
         const {social}= this.state;
         const socialList=social.map( (socialItem) => {
             
             return(
               
                   <Social item={socialItem.id} key={socialItem.id}>
                         <Icon className={socialItem.icon} item={socialItem.id}> 
                         </Icon>
                         <Text>
                             <Info>
                               {socialItem.title}
                             </Info>
                             <Sub>
                                {socialItem.body}
                             </Sub>
                         </Text>
                   </Social>
                
              
             )
         })
        return (
            <SocialMedia>
               {socialList}
            </SocialMedia>
        )
     }
    
}
export default SocialMed