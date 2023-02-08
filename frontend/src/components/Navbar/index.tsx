import { Link, NavLink } from 'react-router-dom';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import logoTerceirao from 'assets/images/logo-terceirao.png';

import { AuthContext } from 'AuthContext';
import { useContext, useEffect } from 'react';
import { getTokenData, isAuthenticated } from 'util/auth';
import { removeAuthData } from 'util/storage';
import history from 'util/history';

import './styles.css';

function Navbar() {

    // se estiver deslogado -> botão de login aparece na navbar. se estiver logado -> botão de logout

    // verificação de credenciais
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

      // evento de logout
      const handleLogoutClick = (event : React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // não há a navegação no link
        
        removeAuthData(); //apagar o token do localStorage -> requests.ts
    
        setAuthContextData({
          authenticated: false,
        })
    
        history.replace('/'); // redireciona pra página home
    }

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