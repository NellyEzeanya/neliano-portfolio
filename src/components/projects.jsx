import React from 'react'

function Projects() {
  return (
    <section className='projects'>
      <div className="container">
        <h2 className="title">Projects</h2>
        <p className="center">My best works</p>

        <article>
            <a href="/" className="project">
                <img src="https://themeforest.img.customer.envatousercontent.com/files/349775964/big_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=302d3c8b20dea2eba48d0f2ba96dd012" alt="project" />
            </a>
            <a href="/" className="project">
                <img src="https://themeforest.img.customer.envatousercontent.com/files/349776689/big_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=9e891d1ba3992397e168dbf1268210f1" alt="project" />
            </a>
            <a href="/" className="project">
                <img src="https://themeforest.img.customer.envatousercontent.com/files/377253534/preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=ce5e8337a96decccfd66f0a245b4a4c2" alt="project" />
            </a>
        </article>
    </div>
    </section>
  )
}

export default Projects
