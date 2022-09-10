import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import Topbar from '../../components/topbar/Topbar'
import img1 from "../../asset/img1.jpg"
import img2 from "../../asset/img2.jpg"
import img3 from "../../asset/img3.jpg"
import './Home.scss'
import { useEffect } from 'react'
import { ProductionQuantityLimits } from '@mui/icons-material'

const project=[
  {id:1,name:"Rohit Kumar Sah",img:img1,profile:"Frontend Dev",age:22,experiance:"2+"},
  {id:2,name:"Abhay Gupta",img:img2,profile:"Mern Stack",age:23,experiance:"1+"},
  {id:3,name:"Satish Patel",img:img3,profile:"Backend Dev",age:25,experiance:"4+"}
]
function Home() {

  const handleSubmit=()=>{
    console.log("done")
  }

  const [feedback,setFeedback]=useState({})
  const [arrayfeedback,setArrayFeedback]=useState([])
  useEffect(()=>{
    if(Object.keys(feedback)!=0)
    {
          const exist = arrayfeedback.find((data) => data.id === feedback.id)
          if(exist)
          {
              return
          }
          else 
          {
              setArrayFeedback([...arrayfeedback, feedback])
          }
    }
  },[feedback])
  console.log(arrayfeedback.length)
  console.log(arrayfeedback)
  return (
    <div className='feedback-container'>
     <Topbar/>
     <div className="feedback-wrapper">
       {project.map(data=>{
        return <Card key={data.id} setFeedback={setFeedback} data={data}/>
       })}
     </div>
     <div className='submit-button'>
      <button disabled={arrayfeedback.length===3?false:true} className={arrayfeedback.length===3?"home-button-fb" :"home-button-fb disable"} onClick={handleSubmit}>Submit</button>
     </div>
    </div>
  )
}


export default Home