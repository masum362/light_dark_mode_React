import React, { useEffect, useState } from 'react'

const Header = () => {
    const [theme , setTheme] = useState('light-theme');

const toggleBtn = () => {
   theme==="light-theme" ? setTheme('dark-theme' ) : setTheme('light-theme');
   console.log(theme)
}

useEffect(() => {
    document.body.className= theme
}, [theme])


  return (
    <>
     <header>
        <nav>
            <div>
                <h1>Happy Ending360</h1>
            </div>
            <div>
                <ul className="nav-item">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Registration</a></li>
                    <i className="fa-solid fa-moon" id="toggle-btn" onClick={()=>toggleBtn()}></i>
                </ul>
            </div>

        </nav>
    </header>
    </>
  )
}

export default Header