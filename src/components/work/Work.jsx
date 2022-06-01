import "./work.scss"
import LanguageIcon from '@mui/icons-material/Language';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";

const data=[
  {
    id:1,
    title:"Ecommers",
    desc:"MERN Application",
    img:"./assets/project1.jpg"
  },
  {
    id:2,
    title:"Profile",
    desc:"Just for Fun!!",
    img:"./assets/project2.jpg"
  },
  {
    id:3,
    title:"Design",
    desc:"Just for Fun!!",
    img:"./assets/project4.jpg"
    
  },
  {
    id:4,
    title:"Booking",
    desc:"MERN Application 'status:working....'",
    img:"./assets/ui.webp"
  }
]

function Work() {

  const [currentSlide,setCurrentSlide]=useState(0)

  const changeSlide=(type)=>{
    if(type==="backward"){
      setCurrentSlide(currentSlide>0?currentSlide-1:data.length-1)
    }else{
      setCurrentSlide(currentSlide<data.length-1?currentSlide+1:0)
    }
    
  }

  console.log(currentSlide)
  return (
   <div className='work' id="work">
     <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
      {data.map(d=>{
        return <div className="container">
          <div className="card">
          <div className="itemcontainer">
            <div className="left">
                  <div className="leftcontainer">
                    <div className="leftlogo">
                    <LanguageIcon/>
                    </div>
                    <h2>{d.title}</h2>
                    <span>{d.desc}</span>
                    <h3>Project</h3>
                  </div>
            </div>
            <div className="right">
              <div className="rightcontainer">
                <img src={d.img}/>
              </div>
            </div>
          </div>
        </div>
        </div>
      
})}

</div>
<ArrowBackIosIcon className="arrowback" onClick={()=>changeSlide('backward')}/>
<ArrowForwardIosIcon className="arrowforword" onClick={()=>changeSlide('forward')}/>
</div>
  )
}

export default Work