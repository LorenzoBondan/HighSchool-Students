import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import RegisterForm from "./Register";
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
                        <RegisterForm />
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