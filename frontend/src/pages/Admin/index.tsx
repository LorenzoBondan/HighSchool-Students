import { Switch } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";
import './styles.css';
import LeftNavbar from "./LeftNavbar";
import Users from "./User";

function Admin(){
    return(
        <div className="admin-container">
            <LeftNavbar />

            <div className="admin-content">
                
                <Switch>
                    <PrivateRoute path="/admin/students">
                        <h1>students CRUD</h1>
                    </PrivateRoute>

                    <PrivateRoute path="/admin/courses">
                        <h1>courses CRUD</h1>
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