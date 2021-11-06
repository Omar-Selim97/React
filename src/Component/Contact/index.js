import React from 'react';
import {Cont,Back,Heading,Form,Input,Submit} from './style.js';
import Fade from 'react-reveal/Fade';
 const Contact=()=> {
    return (
        <Back>
            <Cont>
                   

                <div className="container">
                <Fade top>
                            <Form>
                            <Heading className='text-info'>Contact Form</Heading>
                                <label for="fname" className="lead">First Name</label>
                                <Input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                                <label for="lname" className="lead">Last Name</label>
                                <Input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                                <label for="subject" className="lead">Subject</label>
                                <Input id="subject" name="subject" placeholder="Write something.." ></Input>

                                <Submit type="submit" value="Submit"/>
                            </Form>
                    </Fade>
                        </div>
            </Cont>
        </Back>
    )
}
export default Contact