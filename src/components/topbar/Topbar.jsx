import React, { useState } from 'react'
import './topbar.scss'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PreviewIcon from '@mui/icons-material/Preview';
import WorkIcon from '@mui/icons-material/Work';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"

function Topbar({viewMenu,setViewMenu}) {
  const resumeUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-e8625.appspot.com/o/Rohit's%20Resume%20(1).pdf?alt=media&token=15948f2c-412a-4821-a070-e3e63fb7ff54"
  return (
    <div className={viewMenu? 'topbar active':'topbar'}>
        <motion.div 
        initial={{x:"-20vw"}}
        animate={{x:"0vh"}}
        transition={{duration:1,type:"spring",stiffness:100}}
        className='left'>
          <Link to="/">
          <a className='logo'>
          <lottie-player style={{"width": "100px","height": "70px"}}
              src="https://assets2.lottiefiles.com/packages/lf20_sxp979fd.json"  background="transparent"  speed="1"    loop  autoplay></lottie-player>
          </a>
          </Link>
          </motion.div>
          <div className='center'>
            <motion.h3
            initial={{y:"-20vh"}} 
            animate={{y:"0vh"}}
            transition={{duration:2}}
            className='topbar-heading'>FEEDBACK FORM</motion.h3>
          </div>
    </div>
  )
}

export default Topbar