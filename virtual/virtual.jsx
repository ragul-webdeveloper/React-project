import React from 'react'
import CSS from"./virtual.module.css";
import Shade from"../../assets/shade.png";
import CompareImage from"react-compare-image";
import Before from '../../assets/before.png';
import After from'../../assets/after.png';
const VirtualDemo=()=> {
  return (
    <div className={CSS.virtual}>
        <div className ={CSS.left}>
            <span>virtual try-on</span>
            <span>Never buy the wrong shade Again</span>
            <span>Try Now!</span>
            <img src={Shade} alt=""/>
        </div>
   
<div className={CSS.right}>
    <div className={CSS.wrapper}>
    <CompareImage leftImage={Before}
     rightImage={After}/>
     </div>
</div>


    </div>
  )
}


export default VirtualDemo;
