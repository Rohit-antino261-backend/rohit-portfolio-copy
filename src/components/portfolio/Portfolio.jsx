import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfoliolist/PortfolioList'
import "./portfolio.scss"
import {web,design,mobile} from "../../project"

function Portfolio() {
  
  const [selected,setSelected]=useState("webApplication")
  const [project,setProject]=useState([])
  const portfolio=[
    
    {
      id:"design",
      title:"Design"
    },
    {
      id:"webApplication",
      title:"Web Application"
    },
    {
      id:"mobileApplication",
      title:"Mobile Application"
    }
  ]
  useEffect(()=>{
  switch(selected){
    case"webApplication":
    setProject(web)
    break;

    case"design":
    setProject(design)
    break;

    case"mobileApplication":
    setProject(mobile)
    break;
  }
  },[selected])
  return (
    <div className='portfolio' id="portfolio">
      <h2>Portfolio</h2>
      <ul>
        {portfolio.map((item)=>{
          return <PortfolioList title={item.title} active={item.id===selected} setSelected={setSelected} id={item.id}/>
        })}
      </ul>
      <div className="container">
          {project.map((item)=>{
            return <a href={item.link}>
              <div className="item">
            <img src={item.img}/>
            <h3>{item.title}</h3>
            </div> 
            </a>
          
          })}
      </div>
    </div>
  )
}

export default Portfolio