import React from 'react';
import "../styles/home.css";
import { Container,Row ,Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroImgVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import experienceImg from "../assets/images/experience.png";
import MasonryImagesGallery  from "../components/image-gallery/MasonryImagesGallery";
import Testimonials from '../components/Testi/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row> 
            <Col lg="6">
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
            <Col lg="2">
              <div className='hero__img-box'>
              <img src={heroImg} alt=""/>
              </div>
            </Col>
            <Col lg="2">
              <div className='hero__img-box mt-4'>
              <video src={heroImgVideo} alt="" controls/>
              </div>
            </Col>
            <Col lg="2">
              <div className='hero__img-box  mt-5'>
              <img src={heroImg02} alt=""/>
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      <section>
      <Container>
        <Row>
        <Col lg="3">
          <h5 className='services__subtitle'>Wat we serve</h5>
          <h2 className='services__title'>We offer our best services</h2>
        </Col>
        <ServiceList/>

        </Row>
      </Container>

      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5'>
            <Subtitle subtitle={"Explore"}/>
            <h2 className='featured__tour-title'>Our featured tours </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='6'><div className='experience__content'>
              <Subtitle subtitle={'Experience'}/>
              <h2>With our  all experience <br/> we wille serve you</h2>
              <p>Race day rolled around and as we got out of the car at <br/>the side of a dirt road, I could tell my friend was correct.
              </p>
            </div>
            <div className='counter__wrapper  d-flex align-items-center  gap-5'>
            <div className='counter__box'>
              <span>12K+</span>
              <h6> Successfull Trip</h6>
            </div>
            <div className='counter__box'>
              <span>2K+</span>
              <h6> Regular clients</h6>
            </div>
            <div className='counter__box'>
              <span>15</span>
              <h6> Years experience</h6>
            </div>

            </div>

            </Col>
            <Col lg='6'>
             <div className='experience__img'>
             <img src={ experienceImg } alt=''/>

             </div>

            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' >
            <Subtitle subtitle={'Gallery'}/>
            <h2 className='gallery__title'>Visit our customers tour gallery  </h2>
            </Col>
            <Col lg='12' >
            <MasonryImagesGallery />

            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className='testimonial__title'> 
              What our fans say about us</h2>
            </Col>
            <Col lg="12">
            <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>

    </>
  )
}

export default Home

