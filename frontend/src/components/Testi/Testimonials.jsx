import React from 'react';
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
    const  settings = {
        dots:true,
        infinite: true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        responsive:[{
            breakpoint:992,
            settings:{slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true, 
                dots: true, }
            },
            {
                breakpoint:992,
                settings:{slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true, 
                    dots: true, }
                }
        ]






    }
  return <Slider {...settings}>
    <div className='testimonial py-4 px-3 '>
    <p>This was quite a small race and most other runners were either from the city or this small rural community on its outskirts. We walked along the pebbly road towards the church which (unsurprisingly) marked the start line and I could see why my friend even bothered letting me know about this detail in the first place</p>

    <div className='d-flex align-items-center gap-4 mt-3 '>
        <img src={ava01} className="w-25 h-25  rounded-2" alt=''/>
    <div> 
    <h6 className='mb-0  mt-3 '>
        Jhon Doe
    </h6>
    <p>Customer

    </p></div>
    </div>
    </div>

    <div className='testimonial py-4 px-3 '>
    <p>This was quite a small race and most other runners were either from the city or this small rural community on its outskirts. We walked along the pebbly road towards the church which (unsurprisingly) marked the start line and I could see why my friend even bothered letting me know about this detail in the first place</p>

    <div className='d-flex align-items-center gap-4 mt-3 '>
        <img src={ava02} className="w-25 h-25  rounded-2" alt=''/>
    <div> 
    <h6 className='mb-0  mt-3 '>
        Lia Frank
    </h6>
    <p>Customer

    </p></div>
    </div>
    </div>
    <div className='testimonial py-4 px-3 '>
    <p>This was quite a small race and most other runners were either from the city or this small rural community on its outskirts. We walked along the pebbly road towards the church which (unsurprisingly) marked the start line and I could see why my friend even bothered letting me know about this detail in the first place</p>

    <div className='d-flex align-items-center gap-4 mt-3 '>
        <img src={ava03} className="w-25 h-25  rounded-2" alt=''/>
    <div> 
    <h6 className='mb-0  mt-3 '>
        Jhon Doe
    </h6>
    <p>Customer

    </p></div>
    </div>
    </div>
    <div className='testimonial py-4 px-3 '>
    <p>This was quite a small race and most other runners were either from the city or this small rural community on its outskirts. We walked along the pebbly road towards the church which (unsurprisingly) marked the start line and I could see why my friend even bothered letting me know about this detail in the first place</p>

    <div className='d-flex align-items-center gap-4 mt-3 '>
        <img src={ava03} className="w-25 h-25  rounded-2" alt=''/>
    <div> 
    <h6 className='mb-0  mt-3 '>
        Jhon Doe
    </h6>
    <p>Customer

    </p></div>
    </div>
    </div>

    <div className='testimonial py-4 px-3 '>
    <p>This was quite a small race and most other runners were either from the city or this small rural community on its outskirts. We walked along the pebbly road towards the church which (unsurprisingly) marked the start line and I could see why my friend even bothered letting me know about this detail in the first place</p>

    <div className='d-flex align-items-center gap-4 mt-3 '>
        <img src={ava02} className="w-25 h-25  rounded-2" alt=''/>
    <div> 
    <h6 className='mb-0  mt-3 '>
        Lia Frank
    </h6>
    <p>Customer

    </p></div>
    </div>
    </div>
    </Slider>
  
}

export default Testimonials
