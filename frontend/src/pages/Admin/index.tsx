import { Switch } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";
import './styles.css';
import LeftNavbar from "./LeftNavbar";
import Users from "./User";
import Courses from "./Course";
import Students from "./Students";
import { hasAnyRoles, isAuthenticated } from "util/auth";
import accessDenied from 'assets/images/access-denied.png';
import { MdDangerous } from 'react-icons/md';

function Admin(){
    return(

        <div className="admin-container" style={{display:"flex", justifyContent:"center"}}>

        {hasAnyRoles(["ROLE_OPERATOR", "ROLE_ADMIN"])?  (
            <>
            <LeftNavbar />
            
            <div className="admin-content">

                        <Switch>
                            <PrivateRoute path="/admin/students">
                                <Students />
                            </PrivateRoute>

                            <PrivateRoute path="/admin/courses">
                                <Courses />
                            </PrivateRoute>

                            <PrivateRoute path="/admin/users">
                                <Users />
                            </PrivateRoute>
                        </Switch>

                    </div></>

            ) : (
                <div className='base-card access-main-container'>
                    <div className="access-img-container">
                        <img src={accessDenied} alt="" />
                    </div>
                    <div className="access-text-container" style={{textAlign:"center"}}>
                        <h1 className="text-primary">
                            <i><MdDangerous/></i>
                            Access denied!
                        </h1>
                        {isAuthenticated() ? 
                            <p className="text-secondary">Ask for an Admin to give you permission</p> 
                            : <p className="text-secondary">Sign in to have access to this page</p>
                        }
                    </div>
                </div>
                
            )}
            
        </div>
    );
}

export default Admin;