import React from 'react'
import './testimonials.scss'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Testimonials() {
  return (
    <div className='testimonials' id="testimonials">
      <div className="slider">
        <div className="container">
          <div className="card">
          <div className="left">
            
             <div className="imagecontainer">
             </div>
            
          </div>
          <div className="right">
            <div className="rightcontainer">
              <div className="top">
              <h2>Client Reviews</h2>
              </div>
              <div className="bottom">
                <div className="bottomtop">
                <FormatQuoteIcon className='leftquote'/>
                </div>
              <div className="bottomcenter">
              <span className='quote'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, commodi tempora velit nihil nisi quisquam qui magni accusantium mollitia et.</span>
              </div>
              <div className="bottombottom">
              <FormatQuoteIcon className='rightquote'/>
              </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials