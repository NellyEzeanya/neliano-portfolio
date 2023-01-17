import React from 'react'

function Contact() {
  return (
    <section className='contact' id="contact">
      <div className="container">
      <h2 className="title">Keep in touch</h2>
            <p className="center">You can reach me via email</p>
            <form action="mailto:nelly@yahoo.com" method='post' encType='text/plain'>
            <input type="text" name="message" placeholder='Say hi!' />
            <button type="submit">Send</button>
            </form>
      </div>
    </section>
  )
}

export default Contact
