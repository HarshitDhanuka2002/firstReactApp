import React from 'react'

const NavBar = (props) => {
  return (
    <div className='navBar' style={{background:props.color}}>
        <img className='logo' src={require('../images/wb.png')} alt="wanderbytes logo" onClick={event =>  window.location.href='/'}/>
        <ul className='navLinks'>
            <li onClick={event =>  window.location.href='/blogs'}>BLOGS</li>
            <li onClick={event =>  window.location.href='/about'}>ABOUT</li>
            <li onClick={event =>  window.location.href='/contact'}>CONTACT</li>
            <li onClick={event =>  window.location.href='/'}><button className="nav-btn">SIGN IN</button></li>
        </ul>
        
    </div>
  )
}

export default NavBar