import React from 'react'
import "./Card.scss"
import bg1 from "../../asset/bg1.jpg"
import img1 from "../../asset/img1.jpg"
import ratingIcon from "../../asset/rating-icon.png"
import ratingIcon1 from "../../asset/rating-icon1.png"
import FeedbackForm from '../FeedbackForm/FeedbackForm'
import { useState } from 'react'
import {motion} from "framer-motion"
import Success from '../Success/Success'
function Card({data,setFeedback}) {
    const[isBgBlur,setIsBgBlur]=useState(false)
    const [openFeedback,setOpenFeedback]=useState(false)
    const [rating,setRating]=useState(0)
    const [feedbackMessage,setFeedbackMessage]=useState("")
    
    const handleFeedback=()=>{
        setOpenFeedback(!openFeedback)
        setIsBgBlur(!isBgBlur)
        localStorage.setItem("fbOpen",isBgBlur)   
    }
    // console.log(isBgBlur?"true":"false")
  return (
    <>
    <motion.div
    initial={{x:"-100vw"}}
    animate={{x:"0vw"}}
     transition={{duration:2,delay:2,type:"spring",stiffness:40}}
    className={openFeedback?'card-container disable':'card-container '}>
        <div className='card-top'>
            <img src={bg1}  className="bg-img"/>
            <img src={img1} className="pp-img"/>
            <span className='dev-name'>{data.name}</span>
            {(feedbackMessage.length>3 && rating>0) &&
                <div className='success-icon'><Success/></div>
            }
        </div>
        <div className='card-center'>
            <div className='left'>
                <h3 className='title'>Age</h3>
                <span className='info'>{data.age}</span>
            </div>
            <div className='center'>
            <h3 className='title'>Profile</h3>
                <span className='info'>{data.profile}</span>
            </div>
            <div className='right'>
            <h3 className='title'>Experiance</h3>
                <span className='info'>{data.experiance}</span>
            </div>
        </div>
        <div className='card-bottom' >  
            <div className='feedback-rating' style={{visibility:(feedbackMessage.length>3 && rating>0)?"":"hidden"}}>
               <img src={rating>=1?ratingIcon1:ratingIcon} className="rating-icon"/>
               <img src={rating>=2?ratingIcon1:ratingIcon} className="rating-icon"/>
               <img src={rating>=3?ratingIcon1:ratingIcon} className="rating-icon"/>
               <img src={rating>=4?ratingIcon1:ratingIcon} className="rating-icon"/>
               <img src={rating>=5?ratingIcon1:ratingIcon} className="rating-icon"/>
            </div>
            <div className='feedback-message' style={{visibility:(feedbackMessage.length>3 && rating>0)?"":"hidden"}}>
                <span>Feedback Message</span>
                <p className='client-feedback'>{feedbackMessage}</p>
            </div>
            <div className='feedback-button'>
                <motion.button 
                initial={{scale:0.9}}
                whileHover={{
                    scale: 1
                }}
                whileTap={{
                    scale: 0.9
                }}
                transition={{duration:0.5}}
                 onClick={handleFeedback}>{(feedbackMessage.length>3 && rating>0)?"Modify":"Add Feedback"}</motion.button>
            </div>
        </div>
   
    </motion.div>

    <div className={openFeedback?'popup-outer disable' : ''}>

        <div>

        <div className='popup'>

    <FeedbackForm data={data} setFeedback={setFeedback} sfm={setFeedbackMessage} sr={setRating} openFeedback={openFeedback} setOpenFeedback={setOpenFeedback}/>

    </div>

    </div>

    </div>
    
    </>
  )
}

export default Card