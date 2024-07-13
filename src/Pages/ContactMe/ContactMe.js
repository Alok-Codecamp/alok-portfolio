import React,{useRef} from 'react';
import './contact.css'
import { Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

init("user_5fx0exdMXDac0bi0zsGGS");
const ContactMe = () => {
  const user_name=useRef('');
  const user_email=useRef('')
  const message=useRef('');
  const handleContact=(e)=>{
      e.preventDefault();        

      emailjs.sendForm('service_qqid6yu','template_b0ab8oq',e.target,"user_5fx0exdMXDac0bi0zsGGS")
      .then (res=>{
        console.log(res)
      })
      .catch(err=>console.log(err))
      
    }
    return (
        <div className='Contact-page-container'>
          <h1 id='get-in-touch-h1'>Get in Touch</h1>
            <Form onSubmit={handleContact} id='contact-form'>
  <Form.Group className="mb-3 user-name-container" controlId="exampleForm.ControlInput1">
    <Form.Control id="user-name-input" ref={user_name} name="user_name" type="text" placeholder="Enter your name" />
  </Form.Group>
  <Form.Group className="mb-3 user-email-container" controlId="exampleForm.ControlInput1">
    <Form.Control id='user-email-input' ref={user_email} name="user_email" type="email" placeholder="enter your email" />
  </Form.Group>
  <Form.Group className="mb-3 user-message" controlId="exampleForm.ControlTextarea1">
    <Form.Control id='user-message-input' ref={message} name="message" as="textarea" rows={6} placeholder="Type your massage"/>
  </Form.Group>
  <Form.Control id='submit-button' type="submit" value="Send" />
</Form>
        </div>
    );
};

export default ContactMe;