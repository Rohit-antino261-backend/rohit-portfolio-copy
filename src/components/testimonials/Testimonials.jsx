import React, { useState } from 'react'
import './testimonials.scss'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AdjustIcon from '@mui/icons-material/Adjust';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { useSelect } from '@mui/base';

const testimonials=[
  {
    id:1,
    img:"./assets/testimonial-user-two.png",
    review:"Review one",
    name:"Satish Patel",
    position:""
  },
  {
    id:2,
    img:"./assets/testimonial-user-three.png",
    review:"Review two",
    name:"Satish Patel",
    position:""
  },
  {
    id:3,
    img:"./assets/testimonial-user-four.jpg",
    review:"Review three",
    name:"Satish Patel",
    position:""
  },
  {
    id:4,
    img:"./assets/testimonial-user-five.jpg",
    review:"Review four",
    name:"Satish Patel",
    position:""
  }
  
]

function Testimonials() {
  const [activetestimonial,setActiveTestimonial]=useState(0)
  const [activeToggle,setActiveToggle]=useState(0)

const handleTestimonial=(id)=>{
   setActiveToggle(id)
   setActiveTestimonial(id)
}
console.log(activetestimonial)
  return (
    <div className='testimonials' id="testimonials">
      <div className="slider" style={{transform: `translateX(${activetestimonial*-100}vw)`}}>

        {testimonials.map((item)=>(
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
        ))}

      </div>
      <div className="navigate">
        <FiberManualRecordOutlinedIcon className={activeToggle===0? "navigateone active": "navigateone"} onClick={()=>handleTestimonial(0)}/>
        <FiberManualRecordOutlinedIcon className={activeToggle===1? "navigatetwo active": "navigateone"} onClick={()=>handleTestimonial(1)}/>
        <FiberManualRecordOutlinedIcon className={activeToggle===2? "navigatethree active": "navigatethree"} onClick={()=>handleTestimonial(2)}/>
        <FiberManualRecordOutlinedIcon className={activeToggle===3? "navigatefour active": "navigatefour"} onClick={()=>handleTestimonial(3)}/>
      </div>
    </div>
  )
}

export default Testimonials