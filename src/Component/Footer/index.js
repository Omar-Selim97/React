import React from 'react';
import {Foot,P,Top,Heart} from './style.js';
import { Wave1} from './example.js';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
 const Footer=()=> {
    return (
       
    <footer className="text-white d-grid  bg-dark">
        
          <Foot>
            <P>All Rights Reserved  <Heart>&hearts;</Heart> </P>
            <div style={styles}>
    
                <Wave1 />
            </div>
            <P classNAme="float-end ok "><Top href="#"> <i class="fas fa-arrow-circle-up fa-2x"></i> </Top></P>
            
            </Foot>
        
        
     </footer>
       
    )
}
export default Footer