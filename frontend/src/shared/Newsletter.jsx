import React from 'react'
import "./Newsletter.css";
import { Container, Row,Col} from 'reactstrap';
import maleTourist from "../assets/images/male-tourist.png"
const Newsletter = () => {
  return <section className='newseltter'>
    <Container>
        <Row>
            <Col lg="6">
            <div className='newsletter__content'>
            <h2> Subscribe now to get useful traveling information</h2>
            <div className='newsletter__input'>
            <input type="email" Placeholder=" Enter your email"/>
            <button  className='btn newsletter__btn'>Subscribe</button>
            </div>
            <p>
            I think that these moments of being immersed in a totally different culture play a key role in allowing travelers to develop a more open mind.
            </p>
            </div>

            </Col>
            <Col lg="6">
            <div className='newsletter__img'>
            <img src={maleTourist} alt=""/>
            </div>
            

            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter
