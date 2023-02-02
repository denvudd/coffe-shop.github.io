import { NavLink } from "react-router-dom";

import BeansHr from "../beansHr/BeansHr";
import footerLogo from '../../resources/img/coffee-beans-black.svg';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src={footerLogo} alt="" />
          </div>
          <div className="footer-nav">
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
        <BeansHr isBlack={true}/>
      </div>
    </footer>
  )
}

export default Footer;