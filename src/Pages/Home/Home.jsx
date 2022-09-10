import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import Topbar from '../../components/topbar/Topbar'
import img1 from "../../asset/img1.jpg"
import img2 from "../../asset/img2.jpg"
import img3 from "../../asset/img3.jpg"
import axios from "axios"
import './Home.scss'
import { useEffect } from 'react'
import { ProductionQuantityLimits } from '@mui/icons-material'
import Loader from '../../components/Loader/Loader'
import {motion} from "framer-motion"
import { useParams } from 'react-router-dom'

const project=[
  {id:1,name:"Rohit Kumar Sah",img:img1,profile:"Frontend Dev",age:22,experiance:"2+"},
  {id:2,name:"Abhay Gupta",img:img2,profile:"Mern Stack",age:23,experiance:"1+"},
  {id:3,name:"Satish Patel",img:img3,profile:"Backend Dev",age:25,experiance:"4+"}
]
function Home() {

  const [feedback,setFeedback]=useState({})
  const [arrayfeedback,setArrayFeedback]=useState([])
  const [resData,setResData]=useState()
  const [limit,setLimit]=useState(0)

  //api call to sumit client feedback
  const handleSubmit=()=>{
    console.log("done")
  }

  const para=useParams()
  console.log(para)

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

//when page load for the first time , 
//it will make an api call to get all the devloper info  
//pending work need to change project_id, that i will get it from uselocation
useEffect(()=>{
const fetchData= async()=>{
 try{
const res=await axios.post("https://0bf8-2401-4900-5d80-50ac-e554-6a96-bc57-c30a.in.ngrok.io/project/getprojectbyid",{
  project_id:para.projectid
})
console.log(res)
setResData(res.data.data[0])
setLimit(res.data.data[0].developer.length)
 }catch(err){
  console.log(err)
 }
}
fetchData()
},[])


  return (
    <div className='feedback-container'>
     <Topbar/>
     <div className="feedback-wrapper">
       {resData?.developer?.map(data=>{
        return <Card key={data.id} setFeedback={setFeedback} data={data}/>
       })}
     </div>
     <div className='submit-button'>
      <motion.button
      initial={{
        scale: 0.9
      }} 
      whileHover={{
        scale:1
      }}
      whileTap={{
        scale: 0.9
      }}
      disabled={arrayfeedback.length===limit?false:true} className={arrayfeedback.length===limit?"home-button-fb" :"home-button-fb disable"} onClick={handleSubmit}>Submit</motion.button>
     </div>
    </div>
  )
}


export default Home