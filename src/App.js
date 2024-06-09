import './App.css';
import separator from './components/separator_bar.svg'
import projectThumbnail from './components/thumbnail_1.jpg'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="sp-content hero-section sp-flex-column">
        <h2>Hey I'm Saravind 👋</h2>
        <p className='sp-text-para'>I'm a software designer with a deep passion for user experience and growth designs. Currently, Sr. Product designer at We Create Problems, an platform helps recruiters assess candidates more effectively. </p>
        <p className='sp-text-para'>Previously, I designed key products for startups including itilte and Economize Cloud, among others. Before transitioning to design, I specialised in cloud technology operations across multiple firms.</p>
      </div>
      <div className="sp-content sp-separator">
        <img src={separator} alt="" />
      </div>
      <div className="sp-content sp-flex-column">
        <h4 className="selected-work">
          # Selected work
        </h4>
        <img src={projectThumbnail} alt="" className="project-thumbnail" />
      </div>
    </>
  );
}

export default App;
