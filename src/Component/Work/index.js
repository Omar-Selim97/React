import React ,{Component} from 'react';
import {Skills,Contain,Part,Ancor,Icon,Head} from './style.js';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

 class Work extends Component {
     state={
         works:[]
     };
     componentDidMount () {
         axios.get('js/data.json').then(res=> {
             this.setState({
                 works:res.data.works
             })
         })
     }
 
     render(){
      const {works}=this.state;
      const workList=works.map((workITem)=>{
        return(
            <Part className="col-sm-12 col-md-6 col-lg-4" key={workITem.id}>
                <Fade top>
                    <div className="card bg-dark text-light mb-3">
                        <div className="h1 m-top text-info">
                            <Icon className={workITem.icon_name}></Icon>
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-title text-info">{workITem.title}</h4>
                            <p className="card-text lead">
                                {workITem.body}
                            </p>
                            <Ancor href="" className="btn btn-info">See more</Ancor>
                        </div>
                    </div>
                </Fade>
                </Part>
        )
      })
        return (
            <Skills id="work" className="container pt-5 text-center">
                <Head className="  mb-3">
                    Our Skills
                </Head>
            <Contain className="row text-center">
                
                    {workList}
                </Contain>
                </Skills>
                )
     }
    
}
export default Work