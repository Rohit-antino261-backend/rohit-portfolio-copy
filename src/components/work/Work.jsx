import "./work.scss"
import LanguageIcon from '@mui/icons-material/Language';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";

const data=[
  {
    id:1,
    title:"one",
    desc:"some description",
    img:"./assets/ui.webp"
  },
  {
    id:2,
    title:"two",
    desc:"some description",
    img:"./assets/ui.webp"
  },
  {
    id:3,
    title:"three",
    desc:"some description",
    img:"./assets/ui.webp"
  },
  {
    id:4,
    title:"four",
    desc:"some description",
    img:"./assets/ui.webp"
  }
]

function Work() {

  const [currentSlide,setCurrentSlide]=useState(0)

  const changeSlide=(type)=>{
    if(type==="backward"){
      setCurrentSlide(currentSlide>0?currentSlide-1:data.length-1)
    }
    setCurrentSlide(currentSlide<data.length-1?currentSlide+1:0)
  }

  
  return (
   <div className='work' id="work">
     <div className="slider" style={{transform: `translateX(${currentSlide *100}vw)`}}>
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