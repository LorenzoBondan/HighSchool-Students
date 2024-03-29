import { Link, NavLink } from 'react-router-dom';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import logoTerceirao from 'assets/images/logo-terceirao.png';
import { AuthContext } from 'AuthContext';
import { useContext, useEffect } from 'react';
import { getTokenData, isAuthenticated } from 'util/auth';
import { removeAuthData } from 'util/storage';
import history from 'util/history';
import { HiHome } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';
import './styles.css';

function Navbar() {

    const { authContextData, setAuthContextData } = useContext(AuthContext);

    useEffect(() => {
        if(isAuthenticated()){
          setAuthContextData({
            authenticated: true,
            tokenData: getTokenData()
          })
        }
        else{
          setAuthContextData({
            authenticated: false,
          })
        }
      }, [setAuthContextData]);

      const handleLogoutClick = (event : React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); 
        removeAuthData();
        setAuthContextData({
          authenticated: false,
        })
    
        history.replace('/');
    }

    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
            <div className="container-fluid">
                <Link to="/" className="nav-logo-text">
                    <div className='navbar-brand'>
                        <img src={logoTerceirao} alt="logo" />
                    </div>
                    <h4>High School Class</h4>
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
                            <NavLink to="/" activeClassName='active' exact>
                                <i style={{
                                    marginRight:"2px",
                                }}>
                                    <HiHome/>
                                </i>
                                HOME
                                </NavLink>
                        </li>
                        <li>
                            <NavLink to="/students" activeClassName='active'>
                                <i style={{
                                    marginRight:"4px",
                                }}>
                                    <FaUsers/>
                                </i>
                                STUDENTS
                                </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" activeClassName='active'>
                                <i style={{
                                    marginRight:"2px",
                                }}>
                                    <MdAdminPanelSettings/>
                                </i>
                                ADMIN</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='nav-login-logout'>
                    { authContextData.authenticated ? (
                        <>
                        <span className='nav-username'>{authContextData.tokenData?.user_name}</span>
                        <a href="#logout" onClick={handleLogoutClick}>LOGOUT</a>
                        </>
                    ) : (
                        <Link to="/admin/auth">LOGIN</Link>
                    )
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;