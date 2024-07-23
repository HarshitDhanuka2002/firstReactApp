import React from 'react'
import homeBodyBg from '../images/homeBodyBg.jpg'

const HomeBody = () => {
  return (
    <div className='homeBody'>
        <div className='homeBodyLeft'>
            <span className='homeBodyTitle'>Human <br/>stories & ideas!</span>
            <p>A place to read and deepen your understanding.</p>
            <button className="homeBody-btn" onClick={event =>  window.location.href='/blogs'}>Start Reading</button>
        </div>
        <img src={homeBodyBg} alt="Blog Background"/>
    </div>
  )
}

export default HomeBody