import * as React from "react"
import hero_image from '../images/hero-image.png';
import rarepack from '../images/rarepack.png';
import exercise from '../images/exercise.jpg';
import hikerfeed from '../images/hikerfeed.jpg';
import hikerpack from '../images/hikerpack.jpg';
import meep from '../images/meep.jpg';
import '../styles/global.scss';

const IndexPage = () => {
  return (
    <main>
      <div className="hero">
        <div className="top-nav">
          <div className="logo">
            <a href="#">Haystack Software</a>
          </div>
          <div className="nav-links">
            <a href="#about">About Us</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Get in Touch</a>
          </div>
        </div>
        <div className="hero-inner">
          <div className="hero-content">
            <h1>Ready for Liftoff?</h1>
            <p>Haystack Software is about our drive to build products that we want to see in the world. Whether it's from our own minds, 
              or helping out someone with a great idea, we build architecturally sound sites and apps based on our own values and goals.</p>
            <p className="sub-desc">Check out some of our products, or get in touch if you have an idea you would like to explore with us!</p>
            <a href="#" className="btn">Get in Touch</a>
          </div>
          <div className="hero-content">
            <img src={hero_image} alt="hero" />
          </div>
        </div>
      </div>
      <div class="wave">
        <svg viewBox="0 70 500 60" preserveAspectRatio="none">
          <rect x="0" y="0" width="500" height="500" style={{stroke: "none"}} />
          <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: "none"}}></path>
        </svg>
      </div>

      {/* about us */}
      <div className="about-us" id="about">
        <h1>Who we are...</h1>
        <p>We are a passionate group of outdoor enthusiasts, developers and product managers with decades of experience between us, building all types of products in different industries and verticals.  
          The drive to build products that we want to see in the world is what brought us together and made Haystack Software a reality.
        </p>
        <div className="about-us-content">

          <div className="about-us-card">
            <div id="about-us-image-kylem"></div>
            <div className="about-us-card-inner">
              <h2>Kyle McLeod - CEO</h2>
              <p>
              Kyle McLeod works as the CEO & Product Generalist for Haystack. He is an Entrepreneur, Community builder, and Product Strategy specialist with a passion for bringing beautiful new products into the world. With a background in business management, sales, product development and software engineering, he enjoys being involved in every aspect of developing a product and company. His passion for the startup space has led him to consult with many early to late stage companies and help bring some great products to life. He’s looking forward to the Haystack journey and creating lasting value for users all over the world.
              </p>
              <p className="sub-desc">"The only impossible journey is the one you never begin"</p>
            </div>
          </div>

          <div className="about-us-card">
            <div id="about-us-image-kyleh"></div>
            <div className="about-us-card-inner">
              <h2>Kyle Huber - COO</h2>
              <p>
              Kyle Huber is the COO at Haystack, overseeing business and product operations across the company. Kyle is an experienced leader with strong business acumen
who encourages collaboration and drives continuous improvement. He specializes in developing scalable business processes to increase organizational effectiveness. Kyle is excited to accelerate growth at Haystack as the company launches new products to delight users.
              </p>
              <p className="sub-desc">"Progressive improvement beats delayed perfection."</p>
            </div>
          </div>

          <div className="about-us-card">
            <div id="about-us-image-drewb"></div>
            <div className="about-us-card-inner">
              <h2>Drew Bartlett - CTO</h2>
              <p>
              Drew Bartlett is the CTO at Haystack, overseeing all technical aspects of the company. Drew is an experienced leader with strong technical acumen...
              </p>
              <p className="sub-desc">"I really need to get my description and quote to Kyle so he can finish this website 😜"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our projects */}
      <div className="projects" id="projects">

        <h1>Our Projects</h1>
        <p>We build products we want to see in the world, and that people will love using. Check out some of what we've launched already and the ones that we're working on. Sign up below to get updates when new products are launched!</p>

        <div className="projects-content">

          <div className="project-card" style={{ backgroundImage: `url(${rarepack})` }}>
            <a className="project-card-container">
              <div className="project-content">
                <h2>RarePack</h2>
                <p>The next big thing in TCG card management. From creating your binders to managing collections, you can do it all with RarePack</p>
              </div>
            </a>
          </div>

          <div className="project-card" style={{ backgroundImage: `url(${hikerpack})` }}>
            <a className="project-card-container">
              <div className="project-content">
                <h3>Coming Soon</h3>
                <h2>HikerPack</h2>
                <p>Going for a hike? 1 day, 2 days or a week? Make sure you have the right gear with our AI powered search engine and organizer</p>
              </div>
            </a>
          </div>

          <div className="project-card" style={{ backgroundImage: `url(${hikerfeed})` }}>
            <a className="project-card-container">
              <div className="project-content">
                <h2>HikerFeed</h2>
                <p>All in one solution to manage your through-hiking trip. Whether it's the PCT or the AT, or anything in between, HikerPack is right there every step of the way</p>
              </div>
            </a>
          </div>

          <div className="project-card" style={{ backgroundImage: `url(${exercise})` }}>
            <a className="project-card-container">
              <div className="project-content">
                <h3>Coming Soon</h3>
                <h2>WholeHealth</h2>
                <p>Get your health all in one place. WholeHealth helps you manage everything from your training, physical therapy to chiropractic all from one app. You can even show your providers your whole health history so they know that you've been keeping up!</p>
              </div>
            </a>
          </div>

          <div className="project-card" style={{ backgroundImage: `url(${meep})` }}>
            <a className="project-card-container">
              <div className="project-content">
                <h3>Coming Soon</h3>
                <h2>Meep</h2>
                <p>For the memories you want to keep! Meep is here to make sure that you can look back in 50 years and never forget that amazing trip you took, where you went, and what you did</p>
              </div>
            </a>
          </div>

        </div>

      </div>

      {/* contact us */}
      <div className="contact-us" id="contact">

        <h1>Get in touch</h1>
        <p>Have a question? Want to work with us? We'd love to hear from you!</p>

        <form className="contact-form" name="contact" method="POST" data-netlify="true" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      {/* footer */}
      <div className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h1>Haystack Software - 2023</h1>
          </div>
          <div className="footer-right">
            <a href="#about">About Us</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Get in Touch</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Haystack Software</title>
