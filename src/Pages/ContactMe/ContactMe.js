import React,{useRef} from 'react';
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
        <div>
          <h1 className="text-primary mt-5 mb-4">Get in Touch</h1>
            <Form onSubmit={handleContact}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control ref={user_name} name="user_name" type="text" placeholder="Enter your name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control ref={user_email} name="user_email" type="email" placeholder="enter your email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control ref={message} name="message" as="textarea" rows={3} placeholder="Type your massage"/>
  </Form.Group>
  <Form.Control style={{color:'white', backgroundColor:'#0B5ED7', width:'20%', marginLeft:'auto', marginRight:'auto'}} type="submit" value="Send" />
</Form>
        </div>
    );
};

export default ContactMe;