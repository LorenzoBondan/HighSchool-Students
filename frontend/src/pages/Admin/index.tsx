import { Switch } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";
import './styles.css';
import LeftNavbar from "./LeftNavbar";

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
                        <h1>users</h1>
                    </PrivateRoute>
                </Switch>

            </div>


        </div>
    );
}

export default Admin;