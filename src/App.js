import './App.css';
import separator from './components/img/separator_bar.svg'
import projectThumbnail_1 from './components/img/thumbnail_1.png'
import projectThumbnail_2 from './components/img/thumbnail_2.png'
import projectThumbnail_3 from './components/img/thumbnail_3.png'
import icon_social_linkedin from './components/img/icon_social_linkedin.svg'
import icon_social_twitter from './components/img/icon_social_twitter.svg'
import icon_social_behance from './components/img/icon_social_behance.svg'
import icons_social_medium from './components/img/icon_social_medium.svg'
import palm from './components/img/palm.svg'
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';
import projectJSON from './data/projects.json'

function App() {
  return (
    <>
      <Navbar />
      <div className="sp-content hero-section sp-flex-column">
        <h2>Hey I'm Saravind <img src={palm} alt="" /></h2>
        <p>I'm a software designer with a deep passion for user experience and growth designs. Currently, <span className='sp-semi-bold'>Sr. Product designer</span> at <span className='sp-semi-bold sp-underline'><a href='https://www.wecreateproblems.com/' target='_blank' rel="noreferrer">We Create Problems</a></span>, an platform helps recruiters assess candidates more effectively. </p>
        <p>Previously, I designed key products for startups including itilite and Economize Cloud, among others. Before transitioning to design, I specialised in cloud technology operations across multiple firms.</p>
      </div>
      <div className="sp-content sp-separator">
        <img src={separator} alt="" />
      </div>
      <h4 className="sp-content selected-work">
          # Selected work
      </h4>
      <ProjectSection thumbNail={projectThumbnail_1} url={projectJSON[1].url} heading={projectJSON[1].heading} text={projectJSON[1].text} tags={projectJSON[1].tags} />
      <ProjectSection thumbNail={projectThumbnail_2} url={projectJSON[2].url} heading={projectJSON[2].heading} text={projectJSON[2].text} tags={projectJSON[2].tags} />
      <ProjectSection thumbNail={projectThumbnail_3} url={projectJSON[3].url} heading={projectJSON[3].heading} text={projectJSON[3].text} tags={projectJSON[3].tags} />
      <div className="sp-content sp-separator">
        <img src={separator} alt="" />
      </div>
      <h4 className="sp-content selected-work">
          # Contact
          <span className="sp-available">Available for work</span>
      </h4>
      <div className="sp-content">
        <p>I’m looking to collaborate on interesting projects with great people and teams. Drop an email at <i>saravindkv at gmail dot com</i></p>
      </div>      
      <div className="sp-content sp-separator">
        <img src={separator} alt="" />
      </div>
      <h4 className="sp-content selected-work">
          # Find me on
      </h4>
      <div className="sp-content">
        <ul className='social-icons'>
          <li><a href="https://www.linkedin.com/in/saravindkv/" target='_blank' rel="noreferrer"><img src={icon_social_linkedin} alt='' /></a></li>
          <li><a href="https://x.com/saravindkv" target='_blank' rel="noreferrer"><img src={icon_social_twitter} alt='' /></a></li>
          <li><a href="https://www.behance.net/saravindkv" target='_blank' rel="noreferrer"><img src={icon_social_behance} alt='' /></a></li>
          <li><a href="https://saravindkv.medium.com/" target='_blank' rel="noreferrer"><img src={icons_social_medium} alt='' /></a></li>
        </ul>
      </div>
      <div className="sp-content">
        <span className='sp-footnote'>Designed in Figma and built with React. © 2024 Saravind. All rights reserved.</span>
      </div>
    </>
  );
}

export default App;
