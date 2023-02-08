import { NavLink } from 'react-router-dom';
import { hasAnyRoles } from 'util/auth';

import './styles.css';

const LeftNavbar = () => {
    return(
        <nav className='admin-nav-container'>
            <ul>
                <li>
                    <NavLink to="/admin/students" className='admin-nav-item'>
                        <p>Students</p>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/admin/courses" className='admin-nav-item'>
                        <p>Courses</p>
                    </NavLink>
                </li>

                { hasAnyRoles(['ROLE_ADMIN']) && ( //SOMENTE ADMIN
                    <li>
                        <NavLink to="/admin/users" className='admin-nav-item'>
                            <p>Usuários</p>
                        </NavLink>
                    </li>   
                )}

            </ul>
        </nav>
        

    );
}

export default LeftNavbar;