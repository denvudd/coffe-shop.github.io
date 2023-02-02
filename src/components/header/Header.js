import { NavLink } from 'react-router-dom';

import headerLogo from '../../resources/img/coffee-beans.svg';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-logo">
              <img src={headerLogo} alt="Coffe-beans" />
            </div>
          <div className="header-nav">
            <nav className="nav">
              <ul className="nav-ul">
                  <li className="nav-li"><NavLink style={({ isActive }) => ({textDecoration: isActive ? 'underline' : 'inherit'})}
                                 to="/">Coffe house</NavLink></li>
                  <li className="nav-li"><NavLink style={({ isActive }) => ({textDecoration: isActive ? 'underline' : 'inherit'})}
                                 to="/ourcoffee">Our Coffe</NavLink></li>
                  <li className="nav-li"><NavLink style={({ isActive }) => ({textDecoration: isActive ? 'underline' : 'inherit'})}
                                 to="/pleasure">For your pleasure</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;