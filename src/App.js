import './App.css';
import separator from './components/separator_bar.svg'
import projectThumbnail_1 from './components/img/thumbnail_1.png'
// import projectThumbnail_2 from './components/img/thumbnail_2.jpg'
// import projectThumbnail_3 from './components/img/thumbnail_3.jpg'
import icon_briefcase from './components/img/icon_briefcase.svg'
import icon_devices from './components/img/icon_devices.svg'
import icon_steps from './components/img/icon_steps.svg'
import icon_social_linkedin from './components/img/icon_social_linkedin.svg'
import icon_social_twitter from './components/img/icons_social_twitter.svg'
import icon_social_behance from './components/img/icon_social_behance.svg'
import icons_social_medium from './components/img/icons_social_medium.svg'
import icon_mail from './components/img/icon_mail.svg'
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';

function App() {
  const icon_array = [icon_briefcase, icon_devices, icon_steps]
  return (
    <>
      <Navbar />
      <div className="sp-content hero-section sp-flex-column">
        <h2>Hey I'm Saravind 👋</h2>
        <p>I'm a software designer with a deep passion for user experience and growth designs. Currently, <span>Sr. Product designer</span> at <span>We Create Problems</span>, an platform helps recruiters assess candidates more effectively. </p>
        <p>Previously, I designed key products for startups including itilte and Economize Cloud, among others. Before transitioning to design, I specialised in cloud technology operations across multiple firms.</p>
      </div>
      <div className="sp-content sp-separator">
        <img src={separator} alt="" />
      </div>
      <h4 className="sp-content selected-work">
          # Selected work
      </h4>
      <ProjectSection thumbNail={projectThumbnail_1} icon_array ={icon_array} />
      <ProjectSection thumbNail={projectThumbnail_1} icon_array ={icon_array} />
      <ProjectSection thumbNail={projectThumbnail_1} icon_array ={icon_array}/>
      <div className="sp-content sp-separator">
        <img src={separator} alt="" />
      </div>
      <h4 className="sp-content selected-work">
          # Contact
      </h4>
      <div className="sp-content">
        <p>I’m looking to collaborate on interesting projects with great people and teams. Drop an email and lets connect!</p>
        <div className="email-availability">
          <button>
            <span><img src={icon_mail} alt="" /></span>
            Copy email
          </button>
        </div>
      </div>      
      <div className="sp-content sp-separator">
        <img src={separator} alt="" />
      </div>
      <h4 className="sp-content selected-work">
          # Find me on
      </h4>
      <div className="sp-content">
        <ul className='social-icons'>
          <li><a href="https://www.linkedin.com/in/saravindkv/"><img src={icon_social_linkedin} alt='' /></a></li>
          <li><a href="https://www.linkedin.com/in/saravindkv/"><img src={icon_social_twitter} alt='' /></a></li>
          <li><a href="https://www.linkedin.com/in/saravindkv/"><img src={icon_social_behance} alt='' /></a></li>
          <li><a href="https://www.linkedin.com/in/saravindkv/"><img src={icons_social_medium} alt='' /></a></li>
        </ul>
      </div>
    </>
  );
}

export default App;
