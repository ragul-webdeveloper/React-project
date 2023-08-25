import React from 'react'
import CSS from'./Footer.module.css';
import Logo from "../../assets/logo.png"
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UserIcon,
    LinkIcon,
    } from '@heroicons/react/outline';


const Contact= () => {
  return (
    <div className={CSS.cFooterwrapper}>
       <hr/>
       <div className={CSS.cFooter}>
          <div className={CSS.logo}>
            <img src={Logo} alt=""/>
            <span>amazon</span>
          </div>


          <div className={CSS.block}>
            <div className={CSS.detail}>
                <span>contact us</span>
                <span className={CSS.pngLine}>
                    <LocationMarkerIcon className={CSS.icon}/>
                    <span>111 north avenue orlando, fl 32801</span>
                  
                </span>
                <span className={CSS.icon}>
                
                <PhoneIcon className={CSS.icon}/>
                <a href="tel:252-345-4561">2523454561</a>
                </span>
                <span className={CSS.pngLine}>
                  <InboxIcon className={CSS.icon}/>
                  <a href="mailto:support@amazon.com">support@amazon.com</a>
                </span>
            </div>
          </div>
          <div className={CSS.block}>
            <div className={CSS.details}>
            <span>Account</span>
            <span className={CSS.pngLine}>
              <LoginIcon className={CSS.icon}/>Sign In
            </span>
            </div>
          </div>
          <div className={CSS.block}>
            <div className={CSS.details}>
              <span>Company</span>
              <span className={CSS.pngLine}>
                <UserIcon className={CSS.icon}/>
                <a href="/about">
                  <p>About Us</p>
                </a>
              </span>
            </div>
          </div>
          <div className={CSS.block}>
             <div className={CSS.detail}>
              <span>Resources</span>
              <span className={CSS.pngLine}>
                <LinkIcon className={CSS.icon}/>
                <p>Safety privacy & Terms</p>
              </span>
             </div>
          </div>
       </div>
       <div className={CSS.CopyRight}>
        <span>Copyright @2023 by amazon,inc</span>
        <span>All  rights reversed</span>
       </div>
    </div>
  );
};
export default Contact;