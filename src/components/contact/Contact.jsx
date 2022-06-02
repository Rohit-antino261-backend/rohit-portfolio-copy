import React from 'react'
import "./contact.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
function Contact() {
  return (
    <div className='contact' id="contact">
      <div className="wrapper">
        
          <div className="card">
            <div className="left">
               <div className="imagecontainer">
                 <img src='./assets/contactsideimg.jpg'/>
               </div>
            </div>
            <div className="right">
               <div className="rightcontainer">
                 <div className="top">
                   <h2>Contact me</h2>
                 </div>
                 <div className="center">
                   <div className="centerinput">
                     <PersonIcon className='centerlogo'/>
                   <input type="text" placeholder='Username' className='username'/>
                   </div>
                   <div className="centerinput">
                     <MailIcon className='centerlogo'/>
                   <input type="text" placeholder='Email' className='email'/>
                   </div>
                   <div className="centerinput">                   
                   <textarea placeholder='Message...' className='message'  />
                   </div>
                   
                 </div>
                 <div className="bottom">
                   <button className='submit'>Submit</button>
                  <span>Or</span>
                   
                  <div className="sociallogo">
                    <div className="logofacebook">
                    <FacebookIcon className='facebook'/>
                    </div>
                    <div className="logotwitter">
                    <TwitterIcon className='twitter'/>
                    </div>
                    <div className="logolinkedin">
                    <LinkedInIcon className='linkedin'/>
                    </div>
                  </div>
                 </div>
               </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact