import { Switch } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";
import Login from "./Login";
import './styles.css';

function Auth(){
    return(
        <div className="auth-container">
            
        <div className='auth-form-container'>
            <Switch>

                <PrivateRoute path="/admin/auth/login">
                    <Login />
                </PrivateRoute>

                <PrivateRoute path="/admin/auth/signup">
                    <h1>card de signup</h1>
                </PrivateRoute>

                <PrivateRoute path="/admin/auth/recover">
                    <h1>card de recover</h1>
                </PrivateRoute>

            </Switch>
        </div>

</div>
);
    
}

export default Auth;