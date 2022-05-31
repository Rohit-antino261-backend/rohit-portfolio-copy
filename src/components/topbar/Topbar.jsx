import React, { useState } from 'react'
import './topbar.scss'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

function Topbar({viewMenu,setViewMenu}) {
  return (
    <div className={viewMenu? 'topbar active':'topbar'}>
        <div className='left'>
          <a className='logo' href='#intro'>Rohit.</a>
          <h1 className='phone'><LocalPhoneIcon className='phone_logo'/> 7978478703</h1>
          <h1 className='email'><MarkEmailReadIcon className='email_logo'/> rohitsah892@gmail.com</h1>
        </div>
        <div className="right">
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