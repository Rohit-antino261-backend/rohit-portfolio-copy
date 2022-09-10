import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./FeedbackForm.scss"
import star from "../../asset/rating-icon.png"
import star1 from "../../asset/rating-icon1.png"
import {motion} from "framer-motion"
import { useState } from 'react';
import { useEffect } from 'react';
function FeedbackForm({data,openFeedback,setOpenFeedback,sfm,sr,setFeedback}) {
   const [feedbackMessage,setFeedbackMessage]=useState("")
   const [rating,setRating]=useState(0)
   const [fieldError,setFieldError]=useState({})
   const [fetching,setFetching]=useState(false)
//click on close icon, it will close the feedback window
  const handleClose=()=>{
    setOpenFeedback(!openFeedback)
    setRating(0)
    setFeedbackMessage("")
  }
//this will set the feedback message 
  const handleChange=(e)=>{
   setFeedbackMessage(e.target.value)
  }
 const sendData=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("ok")
   },5000)
 })

 

//click on submit feedback 
  const handleSubmit=()=>{
    setFeedback((prev)=>{
    return {...prev,...{...data,rating:rating,feedbackMessage:feedbackMessage}}
    })
    sr(rating)
    sfm(feedbackMessage)
    setOpenFeedback(!openFeedback)
    setFeedbackMessage("")
    setRating(0)
   
  }
//this will set the rating 
  const handleRating=(rating)=>{
    setRating(rating)
  }
//this is for validation
  useEffect(()=>{
   const checkError=()=>{
     const error={}
     if(feedbackMessage?.length <=4){
       error.message="error two"
     }
     if(rating==0){
       error.rating="error three"
     }
     return error
   }
   setFieldError(checkError())
  },[feedbackMessage,rating])
console.log()
  return (
    <motion.div 
    animate={{x:openFeedback?"0vw":"-100vw"}}
    transition={{duration:0.5}}
    style={{display:openFeedback?"":"none"}}
    className='fb-container'>
        <div className='div-one'>
            <div className='one-top'>
                <label className='left'>
                    <span className='title'>How was your Experiance?</span>
                </label>
                <label className='right'>
                   <CloseIcon onClick={handleClose} className='close-icon'/>
                </label>
            </div>
            <div className='one-bottom'>
                <img className='rating-icon' src={rating>=1?star1:star} onClick={()=>handleRating(1)}/>
                <img className='rating-icon' src={rating>=2?star1:star} onClick={()=>handleRating(2)}/>
                <img className='rating-icon' src={rating>=3?star1:star} onClick={()=>handleRating(3)}/>
                <img className='rating-icon' src={rating>=4?star1:star} onClick={()=>handleRating(4)}/>
                <img className='rating-icon' src={rating>=5?star1:star} onClick={()=>handleRating(5)}/>
            </div>
        </div>
        <div className='div-two'>
            <div className='two-top'>
              <label>
                <input type="text" value={feedbackMessage} onChange={handleChange} placeholder='Type your feedback here'/>
              </label>
            </div>
            <div className='two-bottom'>
                <motion.button 
                whileHover={{
                  scale: 1.1
                }}
                whileTap={{
                    scale:0.9
                }}
                transition={{duration:0.5}}
                className={(Object.keys(fieldError)==0)?"feedback-button":"feedback-button disable"} onClick={handleSubmit}disabled={!(Object.keys(fieldError)==0)}>
               SUBMIT FEEDBACK</motion.button>
            </div>
        </div>
    </motion.div>
  )
}

export default FeedbackForm