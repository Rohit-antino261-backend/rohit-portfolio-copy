import './intro.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTypewriter,Cursor} from 'react-simple-typewriter'

function Intro() {
  const {text} = useTypewriter({
    words: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    loop: Infinity,
    typeSpeed:100,
    delaySpeed:2000,
    deleteSpeed:80
  })
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/imgtwo.png"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Rohit Kumar Sah</h1>
          <h3>Skill <span>{text}<Cursor/></span></h3>
         
        </div>
        <a className='downArrow' href='#work'>
        <KeyboardArrowDownIcon className='arrowLogo'/>
        </a>
      </div>
    </div>
  )
}

export default Intro