import { Switch } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";
import './styles.css';
import LeftNavbar from "./LeftNavbar";
import Users from "./User";
import Courses from "./Course";
import Students from "./Students";
import { hasAnyRoles } from "util/auth";

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
                <div style={{margin:"40px", padding:"40px"}} className='base-card'>
                    <h1 className="text-primary">You don't have access to this page!</h1>
                    <p className="text-secondary">Ask for an Admin to give you permission</p>
                </div>
                
            )}
            
        </div>
    );
}

export default Admin;