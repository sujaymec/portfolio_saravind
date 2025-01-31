import logo_saravind from './img/logo_saravind.svg'

function Navbar() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
    return (
      <>
        <nav className="sp-content sp-flex-row sp-navbar">
            <div className="logo">
                <img src={logo_saravind} alt="" />
            </div>
            <ul className="nav-menu">
                <li className='active'>Home</li>
                <li onClick={() => openInNewTab("https://saravindkv.notion.site/About-me-wip-71317a8b699f41f9909fd5e76e729815")}>About</li>
                <li><a href="https://drive.google.com/drive/folders/1lBJBAOxKAI0-cG4rLG477W5nE0CGqjRq?usp=drive_link" target='_blank' rel="noreferrer">Resume</a></li>
            </ul>
        </nav>
      </>
    );
  }
  
  export default Navbar;