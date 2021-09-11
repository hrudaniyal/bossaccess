import React from "react";
import { Link ,useHistory} from "react-router-dom";
function Nav() {
  const active='active'
  const isHome = useHistory().location.pathname
  const color = localStorage.getItem('color')
  return (
    <div>
      <nav className="nav" style={{background:isHome === '/' ? color :'' }} >
        <div >
          <Link className='logo' activeStyle={{color:'red'}} to="/">HN Code</Link>
        </div>
        <div>
          <Link to="/about" className="link" activeClassName={active} >
            About
          </Link>
          <Link to="/contact" className="link" activeClassName={active} >
            Contact
          </Link>
        </div>
        <div>
          <Link to="/bosslogin" className="link" activeClassName={active} >
            Login as Boss
          </Link>
          <Link to="/employeeslogin" className="link" activeClassName={active} >
            Login as Employees
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
