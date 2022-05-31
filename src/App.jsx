import Topbar from './components/topbar/Topbar'
import './app.scss'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import Work from './components/work/Work'
import { useState } from 'react'

function App() {
  const [viewMenu,setViewMenu]=useState(false)
  return (
   <div className="app">
     <Topbar viewMenu={viewMenu} setViewMenu={setViewMenu}/>
     <Menu viewMenu={viewMenu} setViewMenu={setViewMenu}/>
     <div className="section">
       <Intro/>
       <Portfolio/>
       <Work/>
       <Testimonials/>
       <Contact/>
     </div>
   </div>
    )
}

export default App;
