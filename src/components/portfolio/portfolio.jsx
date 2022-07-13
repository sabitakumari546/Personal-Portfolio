import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/IMG1.png'
import IMG2 from '../../assests/IMG2.png'
import IMG3 from '../../assests/img3.jpg'
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div classname="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
            {/* <h3>This is a portfolio item title</h3> */}
            <div className="portfolio__item-cta">
            <article class="portfolio-item padd-15 animate__animated animate__rollIn animate__delay-4s	4s">
              <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                  <img src={IMG1} alt="" />
                  <a class="btn" target="_blank" href="todooo-listt.netlify.app">Live</a>
                  <a class="btn"target="_blank"  href="https://github.com/sabitakumari546">Github</a>
                </div>
              </div>
            </article>
            <article class="portfolio-item padd-15 animate__animated animate__rollIn animate__delay-4s	4s">
              <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                  <img src={IMG2} alt="" />
                  <a class="btn" target="_blank" href="https://spotiiiiifyclone.netlify.app">Live</a>
                  <a class="btn"target="_blank"  href="https://github.com/sabitakumari546">Github</a>
                </div>
              </div>
            </article>
            <article class="portfolio-item padd-15 animate__animated animate__rollIn animate__delay-4s	4s">
              <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                  <img src={IMG3} alt="" />
                  <a class="btn" target="_blank" href="https://e-comwebsite.netlify.app">Live</a>
                  <a class="btn"target="_blank"  href="https://github.com/sabitakumari546">Github</a>
                </div>
              </div>
            </article>

</div> 
        </article>
      </div>

    </section>
  )
}

export default portfolio
