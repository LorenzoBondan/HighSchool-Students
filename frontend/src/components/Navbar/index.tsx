import { Link, NavLink } from 'react-router-dom';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import logoTerceirao from 'assets/images/logo-terceirao.png';

import './styles.css';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
            <div className="container-fluid">
                
                <Link to="/" className="nav-logo-text">
                    <div className='navbar-brand'>
                        <img src={logoTerceirao} alt="logo" />
                    </div>
                    
                    <h4>High School Students</h4>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#students-navbar"
                    aria-controls="students-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className="collapse navbar-collapse" id="students-navbar">
                    <ul className='navbar-nav offset-md-2 main-menu'>
            
                        <li>
                            <NavLink to="/" activeClassName='active' exact>HOME</NavLink>
                        </li>

                        <li>
                            <NavLink to="/students" activeClassName='active'>STUDENTS</NavLink>
                        </li>

                        <li>
                            <NavLink to="/admin" activeClassName='active'>ADMIN</NavLink>
                        </li>

                    </ul>
                </div>
                
            </div>
        </nav>
    );
}

export default Navbar;