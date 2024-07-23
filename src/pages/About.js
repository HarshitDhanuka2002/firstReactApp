import React from 'react'
import NavBar from '../components/NavBar'
import profile from '../images/harshit.jpg'

const About = () => {
  return (
    <div className='abtPage'>
      <NavBar color="transparent"/>
      <div className='abtContainer'>
        <div className='bgdiv'></div>
        <div className='profile'>
          <img src={profile} alt=''/>
          <div className='profileData'>
            <h1>Hi!</h1>
            <h1>I'm Harshit Dhanuka</h1>
            <p>Visakhapatnam, AP</p>
          </div>
        </div>
      </div>
      <div className='abtBody'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt finibus diam. Nulla ornare mollis risus sed mattis. 
          Nunc at mauris ut velit sollicitudin dignissim ac eget turpis. Duis quis laoreet tellus, eu condimentum mauris. Quisque sed imperdiet lorem. 
          Fusce euismod risus eu tortor dapibus vehicula. Integer rhoncus lorem nec lobortis sagittis. Aenean elementum et lorem in suscipit. Suspendisse at diam eget quam laoreet viverra consectetur adipiscing elit. Curabitur tincidunt finibus diam. Nulla ornare mollis risu.
          <br/><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt finibus diam. Nulla ornare mollis risus sed mattis. 
          Nunc at mauris ut velit sollicitudin dignissim ac eget turpis. Duis quis laoreet tellus, eu condimentum mauris. Quisque sed imperdiet lorem. 
          Fusce euismod risus eu tortor dapibus vehicula. Integer rhoncus lorem nec lobortis.</p>
          <div className='abtFooter'>
            <div>Want to collaborate?</div>
            <button className="abt-btn">CONTACT</button>
          </div>
      </div>
    </div>
  )
}

export default About