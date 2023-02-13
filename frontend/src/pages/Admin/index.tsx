import { Switch } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";
import './styles.css';
import LeftNavbar from "./LeftNavbar";
import Users from "./User";
import Courses from "./Course";
import Students from "./Students";

function Admin(){
    return(
        <div className="admin-container">
            <LeftNavbar />

            <div className="admin-content">
                
                <Switch>
                    <PrivateRoute path="/admin/students">
                        <Students/>
                    </PrivateRoute>

                    <PrivateRoute path="/admin/courses">
                        <Courses/>
                    </PrivateRoute>

                    <PrivateRoute path="/admin/users">
                        <Users/>
                    </PrivateRoute>
                </Switch>

            </div>


        </div>
    );
}

export default Admin;