import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Admin from 'pages/Admin';
import Auth from 'pages/Admin/Auth';
import Students from 'pages/Students';
import StudentDetails from 'pages/StudentDetails';
import Footer from 'components/Footer';


const Routes = () => (
    <BrowserRouter> 
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
    </BrowserRouter>
  );
  
  export default Routes;