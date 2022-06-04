import "./work.scss"
import LanguageIcon from '@mui/icons-material/Language';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import { ListItem } from "@mui/material";

const data=[
  {
    id:1,
    title:"Ecommerce(Client)",
    desc:"MERN Application",
    img:"./assets/projectoneclient.jpg",
    link:"https://github.com/Rohit-COOL-Coder/frontend-user-shop"
  },
  {
    id:2,
    title:"Ecommerce(Admin)",
    desc:"MERN Application",
    img:"./assets/projecttwoadmin.jpg",
    link:"https://github.com/Rohit-COOL-Coder/frontend-admin-shop"

  },
  {
    id:3,
    title:"Portfolio",
    desc:"React Application",
    img:"./assets/projectportfolio.jpg",
    link:"https://rohit-new-portfolio.netlify.app",
    link:"https://github.com/Rohit-COOL-Coder/portfolio"
  },
  {
    id:4,
    title:"Profile",
    desc:"Just for Fun!!",
    img:"./assets/project2.jpg",
    link:"https://github.com/Rohit-COOL-Coder/frontend-admin-shop"
  },
  {
    id:5,
    title:"Design",
    desc:"Just for Fun!!",
    img:"./assets/project4.jpg",
    link:"https://github.com/Rohit-COOL-Coder/Krishwork-frontend-assignment"
    
  },
  {
    id:6,
    title:"Booking(Working)",
    desc:"MERN Application 'status:working....'",
    img:"./assets/ui.webp",
    link:"https://pagenotfound"
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
                    <a href={d.link}><GitHubIcon className="gitlink"/></a>
                    </div>
                    <div className="titlecontainer">
                    <h2>{d.title}</h2>
                    </div>
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