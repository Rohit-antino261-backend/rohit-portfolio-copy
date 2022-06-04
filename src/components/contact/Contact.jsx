import React, { useState } from 'react'
import "./contact.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import emailjs from 'emailjs-com';

function Contact() {
  const [mailsend,setMailSend]=useState(false)
  const [contactInfo,setContactInfo]=useState({})

  const handleInput=(e)=>{
    setContactInfo((prev)=>(
      {...prev,[e.target.name]:e.target.value}
    ))
  }

const handleSubmit=(e)=>{
 e.preventDefault()
      console.log(e.target)
      emailjs.sendForm('gmail', 'template_lkvjpp6',e.target, 'ZBJ1O29ULstrvC_1l')
      .then((result) => {
          alert("Message send..");
          setContactInfo({
            name:"",
            email:"",
            message:""
          })
      }, (error) => {
          alert(error.text);
      });
}


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
              
              <form onSubmit={handleSubmit}>
                
               <div className="rightcontainer">
                 <div className="top">
                   <h2>Contact me</h2>
                 </div>
                 <div className="center">
                   <div className="centerinput">
                     <PersonIcon className='centerlogo'/>
                   <input type="text" required placeholder='Username' name="name" className='username' value={contactInfo.name} onChange={handleInput}/>
                   </div>
                   <div className="centerinput">
                     <MailIcon className='centerlogo'/>
                   <input type="email" required placeholder='Email' name="email" className='email' value={contactInfo.email} onChange={handleInput}/>
                   </div>
                   <div className="centerinput">                   
                   <textarea placeholder='Message...' name="message" required className='message' value={contactInfo.message}  onChange={handleInput} />
                   </div>
                 </div>
                 <div className="bottom">
                   <input type="submit" className='submit' value="Submit"/>
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
              </form>

            </div>
          </div>
      </div>
    </div>
  )
}


export default Contact