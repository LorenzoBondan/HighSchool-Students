import { Switch } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";
import './styles.css';
import Login from "./Auth/Login";
import LeftNavbar from "./LeftNavbar";

function Admin(){
    return(
        <div className="admin-container">
            <LeftNavbar />

            <div className="admin-content">
                
                <Switch>
                    <PrivateRoute path="/admin/products">
                        <h1>students CRUD</h1>
                    </PrivateRoute>

                    <PrivateRoute path="/admin/categories">
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