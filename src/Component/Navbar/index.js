import React from 'react';
import {Link} from "react-router-dom";
import {Logo,Li,Hl} from './style.js';
 const Navbar=()=> {
    return (
      
                <nav className="navbar navbar-expand-lg  navbar-dark bg-dark text-white   ">
                          <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                                        </button>
                            <Logo className="navbar-brand text-primary ps-2 " href="#">Portofolio</Logo>
                            <div className="collapse navbar-collapse me-5" id="navbarTogglerDemo03">
                            <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto ">
                                <li className="nav-item">
                                <Li className="nav-link active" aria-current="page" href="#">  <Link className='link' to="/"> Home </Link>   </Li>
                                </li>
                                <li className="nav-item">
                                    <Li className="nav-link" href="#work"><Hl href="#work">Work</Hl></Li>
                                    <Li className="nav-link" href="#Education"><Hl href="#Education">Education</Hl></Li>
                                    <Li  className="nav-link" href="#Resume"><Hl  href="#Resume">Resume</Hl></Li>
                                    <Li  className="nav-link" href="#About"><Hl  href="#About">About</Hl></Li>     
                                    <Li className="nav-link" href="#">   <Link  className='link' to="/Contact">  Contact </Link> </Li>
                                </li>
                              
                            </ul>
                          
                            </div>
                        </div>
            </nav>
      
    )
}
export default Navbar
