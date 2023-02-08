import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import './styles.css';

function Auth(){
    return(
        <div className="auth-container">
            
            <div className='auth-form-container'>
                <Switch>

                    <Route path="/admin/auth/login">
                        <Login />
                    </Route>

                    <Route path="/admin/auth/signup">
                        <h1>card de signup</h1>
                    </Route>

                    <Route path="/admin/auth/recover">
                        <h1>card de recover</h1>
                    </Route>

                </Switch>
            </div>
        </div>
    );
}

export default Auth;