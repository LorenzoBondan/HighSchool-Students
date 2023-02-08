import { Switch, Route, Redirect, Router } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Admin from 'pages/Admin';
import Auth from 'pages/Admin/Auth';
import Students from 'pages/Students';
import StudentDetails from 'pages/StudentDetails';
import Footer from 'components/Footer';
import history from 'util/history';


const Routes = () => (
    <Router history={history}> 
      <Navbar />
      
      <Switch>
        
        <Route path="/" exact>
          <Home />
        </Route>
  
        <Route path="/students" exact>
          <Students />
        </Route>
  
        <Route path="/students/:studentId">
          <StudentDetails />
        </Route>
  
        <Redirect from='/admin/auth' to='/admin/auth/login' exact />
        <Route path="/admin/auth">
          <Auth />
        </Route>

        <Redirect from="/admin" to="/admin/students" exact />
        <Route path="/admin">
          <Admin />
        </Route>
  
      </Switch>

      <Footer/>
    </Router>
  );
  
  export default Routes;