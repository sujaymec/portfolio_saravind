import logo_saravind from './logo_saravind.svg'

function Navbar() {
    return (
      <>
        <nav className="sp-content sp-flex-row sp-navbar">
            <div className="logo">
                <img src={logo_saravind} alt="" />
            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Resume</li>
            </ul>
        </nav>
      </>
    );
  }
  
  export default Navbar;