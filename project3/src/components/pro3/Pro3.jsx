import React from 'react'
import './pro3.css'
import { FaAngleRight } from "react-icons/fa6";
import p1 from '../../assets/image-removebg-preview (1) 1.png'
import p2 from '../../assets/image-removebg-preview (2) 1.png'

function Pro3() {
  return (
    <div className='pro3'>
      <div className="pro3-content">
        <p className='proP'> Falcon & Hawk </p>
        <h1 className='proH'> THE SIZE MATTERS </h1>
        <p className='we'> 
          We developed the falcon for big faces and the hawk for smaller 
          ones so it can fit your needs for the best performance without 
          compromise 
        </p>
        <div className="pro-size">
          <div className="size-l">
            <p className='sizeP'> Size L </p>
            <button className='size-btn'> SHOP FALCON <FaAngleRight className='ic1'/> </button>
          </div>
          <div className="size-s">
            <p className='sizeP'> Size S </p>
            <button className='size-btn1'> SHOP HAWK <FaAngleRight className='ic2'/> </button>
          </div>
        </div>
      </div>
      <div className="proPhoto">
        <img src={p1} className='photo11' alt="Falcon glasses"/>
        <img src={p2} className='photo12' alt="Hawk glasses"/>
      </div>
    </div>
  )
}

export default Pro3