import React from 'react';
import ProtTypes  from 'prop-types';
import {Link} from 'react-router-dom'

const Header = (props)=>{
  const { branding } = props
  return(
      
      <nav className="navbar navbar-expend-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <Link to="/" className="navbar-brand">{branding}</Link>
          <div>
            <ul className="navbar-nav mr-auto flex-row">
              <li className="nav-item mx-1">
                <Link to="/" className="nav-link"><i className="fas fa-home"></i> Home</Link>
              </li>
              <li className="nav-item mx-1">
                <Link to="/contacts/add" className="nav-link"><i className="fas fa-plus"></i> Add</Link>
              </li>
              <li className="nav-item mx-1">
                <Link to="/about" className="nav-link"><i className="fas fa-question"></i> About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

Header.defaultProps = {
  branding: "My app"
}

Header.propTypes = {
  branding: ProtTypes.string.isRequired
}
export default Header;