import React, { useState } from 'react'
import './testimonials.scss'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AdjustIcon from '@mui/icons-material/Adjust';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { useSelect } from '@mui/base';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const testimonials=[
  {
    id:1,
    img:"./assets/amar.jfif",
    review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, commodi tempora velit nihil nisi quisquam qui magni accusantium mollitia",
    name:"Amar Paloki",
    position:"React Developer",
    link:"https://www.linkedin.com/in/amar-patro-a624a512a/"
  },
  {
    id:2,
    img:"./assets/modi.jfif",
    review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, commodi tempora velit nihil nisi quisquam qui magni accusantium mollitia",
    name:"yash modi",
    position:"Mern Stack Developer",
    link:"https://www.linkedin.com/in/yash-modi-ab8372170/"
  },
  {
    id:3,
    img:"./assets/smitu.jfif",
    review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, commodi tempora velit nihil nisi quisquam qui magni accusantium mollitia",
    name:"Smitendu choudhary",
    position:"Node.js Developer",
    link:"https://www.linkedin.com/in/choudhury-ps-smitendu-668530220/"
  },
  {
    id:4,
    img:"./assets/testimonial-user-five.jpg",
    review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, commodi tempora velit nihil nisi quisquam qui magni accusantium mollitia",
    name:"Abhishek kumar",
    position:"Data Analyst"
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
             <div className="profilecontainer">
                <div className="profiletop">
                  <img src={item.img}/>
                </div>
                <div className="profilebottom">
                  <h3>{item.name.toUpperCase()}</h3>
                  <div className="linkedin">
                  <a href={item.link}> <LinkedInIcon className='link'/></a>
                  <span>{item.position}</span>
                  </div>
                </div>
             </div>
          </div>
          <div className="right">
            <div className="rightcontainer">
              <div className="top">
              <h2>Friends Review</h2>
              </div>
              <div className="bottom">
                <div className="bottomtop">
                <FormatQuoteIcon className='leftquote'/>
                </div>
              <div className="bottomcenter">
              <span className='quote'>{item.review}</span>
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