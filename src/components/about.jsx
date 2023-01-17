import React from 'react'
import proImg from "../assets/white.jpg";

function About() {
  return (
    <section className='about'>
        <div className="container">
            <h2 className="title">About</h2>
            <article>
                <div className="content">
                <p>I'm Max Böck, a front-end web developer and designer based in Vienna, Austria.</p>

<p>I've been building stuff on the web for the last 16 years, working with clients across various countries and industries.</p>

<p>My focus is on creating engaging, accessible & performant interfaces for humans.</p>
                </div>
                <div className="image">
                    <img src={proImg} alt="Nelly" />
                </div>
            </article>
        </div>
    </section>
  )
}

export default About