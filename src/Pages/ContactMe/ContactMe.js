import React, { useRef } from 'react';
import './contact.css'
import { Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

init("user_5fx0exdMXDac0bi0zsGGS");
const ContactMe = () => {
  const user_name = useRef('');
  const user_email = useRef('')
  const message = useRef('');
  const handleContact = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qqid6yu', 'template_b0ab8oq', e.target, "user_5fx0exdMXDac0bi0zsGGS")
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))

  }
  return (
    <div className='Contact-page-container'>
      <div className="form-container">
        <h1 id='get-in-touch-h1'>Get in Touch</h1>
        <Form onSubmit={handleContact} id='contact-form'>
          <Form.Group className="mb-3 user-name-container" controlId="exampleForm.ControlInput1">
            <Form.Control id="user-name-input" ref={user_name} name="user_name" type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3 user-email-container" controlId="exampleForm.ControlInput1">
            <Form.Control id='user-email-input' ref={user_email} name="user_email" type="email" placeholder="enter your email" />
          </Form.Group>
          <Form.Group className="mb-3 user-message" controlId="exampleForm.ControlTextarea1">
            <Form.Control id='user-message-input' ref={message} name="message" as="textarea" rows={6} placeholder="Type your massage" />
          </Form.Group>
          <Form.Control id='submit-button' type="submit" value="Send" />
        </Form>
      </div>
      <div className='contact-text'>
        <p>Here is a good spot for a message to your readers
           to let them know how best to reach out to you.</p>
        <a href="mailto:alok61.bd@gmail.com"> <FontAwesomeIcon style={{marginRight:'10px'}} className='mt-lg-4 mt-md-4 mt-sm-4 ms-xs-4 fb font-awsome' icon={faEnvelope} />alok61.bd@gmail.com</a>
        <a href="https://github.com/Alok-Codecamp" target='_blank'>
          <FontAwesomeIcon style={{marginRight:'10px'}}
            className='mt-lg-4 mt-md-4 mt-sm-4 git faLg font-awsome' icon={faGithub} />
            github.com/Alok-Codecamp
        </a>
        <a href="https://linkedin.com/in/alokkumarwebdeveloper/" target='_blank'>
          <FontAwesomeIcon style={{marginRight:'10px'}} className='mt-lg-4 mt-sm-4 mt-md-4  font-awsome' icon={faLinkedinIn} />
          linkedin.com/in/alokkumarwebdeveloper
        </a>
      </div>
    </div>

  );
};

export default ContactMe;