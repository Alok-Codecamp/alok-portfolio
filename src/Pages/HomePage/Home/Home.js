import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Navigation from '../NavBar/Navigation';
import './Home.css'
import my_Resume from '../../../Rezumi/Alok Kumar.docx.pdf';
import project1 from '../../../image/project/mug-fair/mug-faire.png';
import project2 from '../../../image/project/pain-care/Screenshot_1.png'
import project3 from '../../../image/project/Tour-thirsty/Screenshot_1.png'
import project4 from '../../../image/project/yoga-zone/Screenshot_1.png'
import project5 from '../../../image/project/tutorial-home/Screenshot_1.png'
import project6 from '../../../image/project/anytime-buys/Screenshot_1.png'
import ContactMe from '../../ContactMe/ContactMe';
import me from '../../../image/about/me.jpg';
import banner from '../../../image/banner/banner1.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Home = () => {

    return (
        <div className="container-div">
            <div className="banner  text-light">
                {/* <img src={banner} alt="" /> */}
                <Navigation></Navigation>
                <div className='bannar-content'>



                    <div className='social-icon'>
                        <FontAwesomeIcon className='mt-lg-4 mt-md-4 mt-sm-4 ms-xs-4 fb' icon={faFacebookF} />
                        <FontAwesomeIcon className='mt-lg-4 mt-md-4 mt-sm-4 git' icon={faGithub} />
                        <FontAwesomeIcon className='mt-lg-4 mt-sm-4 mt-md-4' icon={faLinkedinIn} />
                    </div>
                </div>

            </div>


            <div className="project-container container">
                <h2 id="projects" className="text-primary mt-5 mb-4">Explore my project</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={project1} />
                            <Card.Body>
                                <Card.Title>Mug Fair</Card.Title>
                                <Card.Text>
                                    Users can register with username, email, and password. And can later log in with email and password.
                                    Logged-in users can place orders. Placed orders can be viewed at any time by visiting My Order
                                </Card.Text>
                                <Button style={{ marginRight: '10px' }}>
                                    <a href="https://mug-fair.web.app/" target="_blank">Visit</a>
                                </Button>
                                <Button style={{ marginLeft: '10px' }}>Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={project2} />
                            <Card.Body>
                                <Card.Title>Pain care</Card.Title>
                                <Card.Text>
                                    Users can easily book doctor's appointments on this website
                                    React was used to create the UI of this website and Firebase  was used for authentication.
                                    Here,

                                </Card.Text>
                                <Button style={{ marginRight: '10px' }}> <a href="https://pain-care-1.web.app/" target="_blank">Visit</a></Button>
                                <Button style={{ marginLeft: '10px' }}>Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={project3} />
                            <Card.Body>
                                <Card.Title>Tour thirsty</Card.Title>
                                <Card.Text>
                                    This website offers tour package bookings for various tourist spots
                                    React is used to create the UI of this website and Firebase is used for authentication
                                </Card.Text>
                                <Button style={{ marginRight: '10px' }}>  <a href="https://tour-thirsty-1.web.app/" target="_blank">Visit</a></Button>
                                <Button style={{ marginLeft: '10px' }}>Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={project4} />
                            <Card.Body>
                                <Card.Title>Yoga zone</Card.Title>
                                <Card.Text>
                                    Through this website, members can be easily contacted and admitted to the Yoga Training Center in the Yoga Zone.
                                    New members can easily learn about the course rules and fees by visiting the website.

                                </Card.Text>
                                <Button style={{ marginRight: '10px' }}> <a href="https://yoga-zone.netlify.app/" target="_blank">Visit</a></Button>
                                <Button style={{ marginLeft: '10px' }}>Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={project5} />
                            <Card.Body>
                                <Card.Title>Tutorial Home
                                </Card.Title>
                                <Card.Text>
                                    Tutorial Home is an online tutorial related project
                                    Teachers and students can easily communicate through the Tutorial Home website. And the student can take education from the teacher.
                                </Card.Text>
                                <Button style={{ marginRight: '10px' }}><a href="https://tutorial-home.netlify.app/#" target="_blank">Visit</a></Button>
                                <Button style={{ marginLeft: '10px' }}>Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={project6} />
                            <Card.Body>
                                <Card.Title>Anytime buyes</Card.Title>
                                <Card.Text>
                                    Anytime buys is a little ecommmerce website. here have some cloths antic and similer type things. user can buy cloths and get product with home delevery with cash on delevery
                                </Card.Text>
                                <Button style={{ marginRight: '10px' }}><a href=" https://anytime-buys.netlify.app" target="_blank">Visit</a></Button>
                                <Button style={{ marginLeft: '10px' }}>Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div id="contact" className="mb-5 container">
                <ContactMe></ContactMe>
            </div>
        </div>
    );
};

export default Home;