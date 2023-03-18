import React from 'react';
import "./footer.css";
import { Container, Row ,Col,ListGroup,ListGroupItem} from "reactstrap"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png";

const quick__link = [
  {path:'/home',
  display :'Home'

  },
  {path:'/about',
  display :'About'

  },
  {path:'/tours',
  display :'Tours'

  },
]

const quick__link2 = [
  {path:'/gallery',
  display :'Gallery'

  },
  {path:'/login',
  display :'Login'

  },
  {path:'/register',
  display :'Register'

  },
]
const Footer = () => {
  return <footer className='footer'>
  <Container>
    <Row>
      <Col>
      <div className='logo'>
        <img src={logo}  alt=""/>
        <p>I think that these moments of being immersed in a totally different culture play a key role in allowing travelers </p>
      <div className ='social__link  d-flex aligne-items-center gap-4'>
        <span id='fg'>
          <Link to='#'><i  class='ri-youtube-line'></i></Link>
        </span>
        <span id='fg'>
          <Link to='#'><i  class='ri-github-line'></i></Link>
        </span>
        <span id='fg'>
          <Link to='#'><i  class='ri-facebook-line'></i></Link>
        </span>
        <span id='fg'>
          <Link to='#'><i  class='ri-instagram-line'></i></Link>
        </span>
      </div>
       
      </div>

      </Col>
      <Col lg="3">
      <h5 className="footer__quick-link">
        Discover
      </h5>
      <ListGroup className="footer__quick-link" >
      {
        quick__link.map((item,index)=>
        (<ListGroupItem key={index} className="ps-0 border-0">
          <Link to={item.path}>{item.display}</Link>
        </ListGroupItem>))
      }

      </ListGroup>
        
      </Col>
      <Col lg="3">
      <h5 className="footer__quick-link">
        Quick Links
      </h5>
      <ListGroup className="footer__quick-link" >
      {
        quick__link2.map((item,index)=>
        (<ListGroupItem key={index} className="ps-0 border-0">
          <Link to={item.path}>{item.display}</Link>
        </ListGroupItem>))
      }

      </ListGroup>
        

      </Col>

      <Col lg="3">
      <h5 className="footer__quick-link">
        Contact
      </h5>
      <ListGroup className="footer__quick-link" >
      
       
        <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
          <h6 className='mb-0 d-flex aligne-items-center gap-2'><spn><i class='ri-mail-line'></i></spn>
          Email:</h6>
          <p className='mb-0'> ahramlouahabi@gmail.com</p>
        </ListGroupItem>
        <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
          <h6 className='mb-0 d-flex aligne-items-center gap-2'><spn><i class='ri-map-pin-line'></i></spn>
          Address:</h6>
          <p className='mb-0'> Tetouan, Morocco</p>
        </ListGroupItem>
        <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
          <h6 className='mb-0 d-flex aligne-items-center gap-2'><spn><i class='ri-phone-fill'></i></spn>
          Phone:</h6>
          <p className='mb-0'> 0612345678</p>
        </ListGroupItem>
      </ListGroup>
      </Col>
    </Row>
  </Container>
  </footer>
};
export default Footer;