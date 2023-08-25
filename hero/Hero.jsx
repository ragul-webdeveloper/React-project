import React from 'react'
import CSS from'./Hero.module.css';
import HeroImg from'../../assets/hero.png';
import {RiShoppingBagFill} from'react-icons/ri';
import{BsArrowRight} from 'react-icons/bs';
{/*import { motion } from 'framer-motion';*/}


const Hero = () => {
  {/*const transition = { duration: 3, type: "spring" };*/}
  return (
    <div className={CSS.container} >
     {/*leftside*/}
    <div className={CSS.h_sides}>
        <span className={CSS.text1}>Skin protection Cream</span>

        <div className={CSS.text2}>
         <span>Trendy collection</span>
         <span>Seedily say has suitable disposal and boy . Exercise joy man child rejoiced</span>
        </div>

      {/*middlesideheroimage*/}
      <div className={CSS.wrapper}>
        {/*blue circle
        <motion.div
        initial={{bottom: "2rem"}}
        whileInView={{bottom: "0rem"}}
        className={CSS.blueCircle}
        transition={transition}
        ></motion.div>/*/}
        <div className={CSS.blueCircle}></div>
        <img src={HeroImg} alt="heroimg" width={600}></img>
        
        <div className={CSS.cart2}>
            <RiShoppingBagFill/>
            <div className={CSS.signup}>
            <button>Best signup offers  <BsArrowRight/></button>
            </div>
        </div>
      </div>
     </div> 
     {/*rightside*/}
     <div className={CSS.h_sides}>
        <div className={CSS.traffic}>
            <span>1.5rem</span>
            <span>Monthly trafffic</span>
        </div>
        <div className={CSS.customers}>
            <span>100k</span>
            <span>happy customers</span>
        </div>
     </div>
  </div>
  )
}
export default Hero;
