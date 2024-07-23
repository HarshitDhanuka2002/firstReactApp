import React from 'react'
import NavBar from '../components/NavBar'

const Contact = () => {
  return (
    <div>
      <NavBar color="#f6f4f3"/>
      <div className='contactBody'>
        <div className='contactBodyLeft'>
          <span className='contactBodyTitle'>Contact</span>
          <p><b><i>Please fill out the form below to send us an email.</i></b></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis<br/>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <br/><br/>
          <span className='contactBodyEmail'>E-mail :</span>
          <p><b>wanderbytes@gmail.com</b></p>
        </div>
        <form className='contactBodyForm'>
          <input type="text" name="name" placeholder="NAME" required/>
          <input type="email" name="email" placeholder="E-MAIL" required/>
          <input type="text" name="subject" placeholder="SUBJECT" required/>
          <textarea name="message" placeholder="MESSAGE" required rows={8}></textarea>
          <button className="contactForm-btn">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Contact