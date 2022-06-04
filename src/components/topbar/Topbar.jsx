import React, { useState } from 'react'
import './topbar.scss'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PreviewIcon from '@mui/icons-material/Preview';

function Topbar({viewMenu,setViewMenu}) {
  const resumeUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-e8625.appspot.com/o/Rohit's%20Resume%20(1).pdf?alt=media&token=15948f2c-412a-4821-a070-e3e63fb7ff54"
  return (
    <div className={viewMenu? 'topbar active':'topbar'}>
        <div className='left'>
          <a className='logo' href='#intro'>Rohit.</a>
          <h1 className='phone'><LocalPhoneIcon className='phone_logo'/> 7978478703</h1>
          <h1 className='email'><MarkEmailReadIcon className='email_logo'/> rohitsah892@gmail.com</h1>
        </div>
        <div className="right">
          <div className= {viewMenu?"resume active":"resume"}>
            <PreviewIcon className='viewlogo'/>
            <a href={resumeUrl}>Resume</a>
          </div>
          <div className={viewMenu? "hamburger active":"hamburger"} onClick={()=>setViewMenu(!viewMenu)} >
             <span className='hamburger_one' />
             <span className='hamburger_two' />
             <span className='hamburger_three' />
          </div>
        </div>
    </div>
  )
}

export default Topbar