import React, { useState } from 'react'
import Logo from '../../assets/logo.png';
import {BsFillCartDashFill} from 'react-icons/bs';
import CSS from './Header.module.css';
import {GoTab} from 'react-icons/go'
const Home=()=> {
  const [showMenu, setShowMenu]=useState(true)
    const toggleMenu =() =>{
      setShowMenu((showMenu)=>!showMenu)
    }


  return (
    <div className={CSS.container}>
       <div className={CSS.logo}>
        <img src={Logo} alt ="logo"/>
        <span>amazon</span>
       </div>
       <div className={CSS.right}>
        <div className={CSS.bars}onClick={toggleMenu}>
        <GoTab/>
        </div>
        
        <ul className={CSS.menu} style={{ display: showMenu ? 'inherit' : 'none' }}>
       <li>Home</li>
       <li>Virtual Demo</li>
       <li>Our Products</li>
       <li>Review</li>
       <li>Contact</li>
       </ul>

       
       <input type="text" placeholder='search' className={CSS.search}/>
       <BsFillCartDashFill className={CSS.cart}/>
    </div>
</div>
  );
};
export default Home;