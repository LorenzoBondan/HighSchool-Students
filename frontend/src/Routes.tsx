import { Switch, Route, Redirect, Router } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Admin from 'pages/Admin';
import Auth from 'pages/Admin/Auth';
import Students from 'pages/Students';
import StudentDetails from 'pages/StudentDetails';
import Footer from 'components/Footer';
import history from 'util/history';
import Reviews from 'pages/Reviews';
import CountDown from 'pages/CountDown';
import Diary from 'pages/Diary';
import Diary2016 from 'pages/Diary/Diary2016';
import Diary2015 from 'pages/Diary/Diary2015';


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
  
        <Route path="/students/:studentId" exact>
          <StudentDetails />
          
        </Route>

        <Route path="/students/:studentId/reviews">
          <Reviews/>
        </Route>
  
        <Redirect from='/admin/auth' to='/admin/auth/login' exact />
        <Route path="/admin/auth">
          <Auth />
        </Route>

        <Redirect from="/admin" to="/admin/students" exact />
        <Route path="/admin">
          <Admin />
        </Route>

        <Route path="/countdown">
          <CountDown/>
        </Route>

        <Route path="/diary" exact>
          <Diary/>
        </Route>

        <Route path="/diary/2016" exact>
          <Diary2016/>
        </Route>

        <Route path="/diary/2015" exact>
          <Diary2015/>
        </Route>
  
      </Switch>

      <Footer/>
    </Router>
  );
  
  export default Routes;