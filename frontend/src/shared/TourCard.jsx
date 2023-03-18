import React from 'react';
import { Card,CardBody } from 'reactstrap';
import { Link} from "react-router-dom";
import "./tour-card.css";
import calculAvgRating from '../utils/avgRating';


const TourCard = ({tour}) =>{
  const { _id, title, city, photo, price, featured, reviews} = tour;
  const {avgRating,totalRating} =calculAvgRating(reviews);
  return (<>
    <div className='tour__card'>

      <Card ><div className='tour__img'>
      <img src={photo} alt="tour-img"/>
      {featured &&<span>Featured</span>}
      </div>
      </Card>
      <Card>
      <CardBody>
      <div className='card__top   d-flex align-items-center justify-centent-between gap-5'>
        <span className='tour__location  d-flex align-items-center gap-1'>
        <i className='ri-map-pin-line'></i>{city}
        </span>
           <span className='tour__rating  d-flex align-items-center gap-1'>
        <i className='ri-star-fill'></i>   {avgRating === 0 ? null : avgRating}
        {totalRating=== 0 ? ('Not rated' ): (<span>({reviews.length})</span>)}
        
        </span>
        </div>
       

        <h5 className='tour__title'><Link to={`/tours/${_id}`}>{title}</Link></h5>
        <div className='card__bottom d-flex align-items-center justify-centent-between mt-3 gap-4'>
        <h6>
          ${price}<span>/per person</span>
        </h6>
        <button className='btn booking__btn'><Link to={`/tours/${_id}`}>Book Now</Link></button>
      </div>
     </CardBody>
      </Card>
    </div>
    </>
  );
}

export default TourCard
