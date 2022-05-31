import "./menu.scss"

function Menu({viewMenu,setViewMenu}) {
  return (
    <div className={viewMenu? 'menu active' :'menu'}>
        <ul>
            <li onClick={()=>setViewMenu(!viewMenu)}>
                <a href='#intro'>Intro</a>
            </li>
            <li onClick={()=>setViewMenu(!viewMenu)}>
                <a href='#portfolio'>Portfolio</a>
            </li>
            <li onClick={()=>setViewMenu(!viewMenu)}>
                <a href='#work'>Work</a>
            </li>
            <li  onClick={()=>setViewMenu(!viewMenu)}>
                <a href='#testimonials'>Testimonials</a>
            </li>
            <li onClick={()=>setViewMenu(!viewMenu)}>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu