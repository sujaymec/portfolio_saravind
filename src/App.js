import './App.css';
import separator from './components/separator_bar.svg'
import projectThumbnail from './components/thumbnail_1.jpg'
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';

function App() {
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
      <ProjectSection thumbNail={projectThumbnail} />
      <ProjectSection thumbNail={projectThumbnail} />
      <ProjectSection thumbNail={projectThumbnail} />
    </>
  );
}

export default App;
