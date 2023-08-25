import React from 'react'
import { useState } from 'react';
import {Swiper,SwiperSlide} from"swiper/react";
import {Pagination, Navigation} from "swiper/modules";
//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

import {SliderProducts} from "../../data/products";

const Slider=()=>{

    const [successMessage, setSuccessMessage] = useState('');
  
    const handleShopNowClick = () => {
      setSuccessMessage('Product added to cart successfully!');
      alert('Product added to cart successfully!');
    };

  return (
    <div className="s-container">
        <Swiper
        breakpoints={{
          640:{
            slidesPerView: 3,
          },
         0:{
          slidesPerView:1,
         },
        }

        }
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loopfillgroupwithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}>
            
              {SliderProducts.map((slide,i) => {
              return(
                <SwiperSlide key={i}>
                    <div className='left-s'>
                        <div className='name'>
                            <span>{slide.name}</span>
                            <span>{slide.detail}</span>
                        </div>
                        <span>{slide.price}$</span>
                        <button onClick={handleShopNowClick}>shop now</button>
                    </div>
                    <img src={slide.img} alt="product" className="image_p"/>
               </SwiperSlide>
              );
            })}
            </Swiper>
    </div>
  )
}

export default Slider;