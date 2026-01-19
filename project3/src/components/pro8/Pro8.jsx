import React from 'react'
import './pro8.css'

function Pro8() {
  return (
    <div className='pro8'> 
      <div className="pro8-tex">
        <p className='pro8-p'> JOIN OUR NEWSLETTER </p>
        <h1 className='pro8-h'> Enter your e-mail and don’t miss <br />
        any news or promotion from NAKED Optics </h1>
      </div>
      <div className="butt">
        <span> <input type="" placeholder='Add your email' className='inp8' /> <button className='pro-btn'> Send › </button> </span>
        <div className='galochka'>
          <input type="checkbox" id="privacy-checkbox" />
          <label htmlFor="privacy-checkbox">I accept the <a href=""> privacy policy </a></label>
        </div>
      </div>
    </div>
  )
}

export default Pro8