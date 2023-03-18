import React from 'react'
import { Container,Row ,Col } from "reactstrap";
import Newsletter from '../shared/Newsletter';
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import "../styles/home.css";

const About = () => {
  return (<>
    <section>
          <Container>
          <Row>
            <Col lg="12">
            <div className='.hero__content'>
            <div className='hero__subtitle d-flex align-items-center'>
            <Subtitle subtitle={'Know Before You Go'}/>
            <img src={worldImg} alt=''/>
            </div>
            <h1>Travling opens the door to creating<span id='lol1'> memories</span></h1>
            
            <p>I agreed without hesitation: a morning doing something active 
            and outdoors usually trumps any other plans I could muster. 
            Plus, I had been in Ecuador for three months already and had yet to join
             in on any aspect of the running community. 
            </p>
            </div>
            
            </Col>
          </Row>
        </Container>
    </section>
    <Newsletter/>
    </>
  );
};

export default About;
