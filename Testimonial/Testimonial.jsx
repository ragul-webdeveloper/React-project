import React from 'react';
import CSS from './Testimonial.module.css';
import Hero from '../../assets/testimonialHero.png';
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react"; // Make sure the import path is correct

const Review = () => {
  return (
    <div className={CSS.testimonials}>
      <div className={CSS.wrapper}>
        <div className={CSS.container}>
          <span>Top Rated</span>
          <span>
            seedily say has suitable disposal and boy. exercise joy man children rejoiced.
          </span>
        </div>
        <img src={Hero} alt="" />
        <div className={CSS.container}>
          <span>100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>


      <div className={CSS.reviews}>Reviews</div>
      <div className={CSS.carousal}>
        <Swiper
          slidesPerView={3} // Fixed typo: 'slidesperview' should be 'slidesPerView'
          slidesPerGroup={1} // Fixed typo: 'slidespergroup' should be 'slidesPerGroup'
          spaceBetween={20} // Fixed typo: 'spacebetweeen' should be 'spaceBetween'
          className={CSS.tcarousal}
          breakpoints={{
            820:{
              slidesPerView:3
            },
            640:{
              slidesPerView: 2
            },
            0:{
              slidesPerView: 1
            }
          }}
        >
          {/* Use parentheses to implicitly return JSX */}
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className={CSS.testimonial}>
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Review;
