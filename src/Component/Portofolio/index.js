import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import {Port,Title,List,Item,Cont,Part,Image,Overlay,OverlaySpan,Span} from './style.js';

 const Portofolio=()=> {
     const[images,setImages]=useState([]);
     useEffect(() => {
        
        axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
         
     }, [])
     const PortImages=images.map((items)=>{
         return(
            
                       <Part  key={items.id}>
                      
                           <Image src={items.image} alt=''/>
                           <Overlay>
                               <OverlaySpan>
                                   Show Image
                               </OverlaySpan>
                           </Overlay>
                           
                       </Part>
                    
          
         )
     });
    return (
   
        <Port id='Education'>
        <Fade down>
            <Title className="text-primary "> <Span className="text-info">My</Span> Educations</Title>
            <List>
                <Item active>All</Item>
                <Item>Html </Item>
                <Item>Css</Item>
                <Item>Javascript</Item>
                <Item>Mern Stack</Item>
            </List>
           
            <Cont> 
                {PortImages}
            </Cont>
          </Fade>
        </Port>
   
    )
}
export default Portofolio