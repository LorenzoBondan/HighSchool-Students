import { Switch, Route, Redirect, Router } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Admin from 'pages/Admin';
import Auth from 'pages/Admin/Auth';
import Students from 'pages/Students';
import StudentDetails from 'pages/StudentDetails';
import Footer from 'components/Footer';
import history from 'util/history';
import Reviews from 'components/Reviews';
import CountDown from 'pages/CountDown';
import DiaryPage from 'pages/Diary';
import TheBest from 'pages/TheBest';
import GraduationVideo from 'pages/GraduationVideo';


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
          <DiaryPage/>
        </Route>

        <Route path="/thebest" exact>
          <TheBest/>
        </Route>

        <Route path="/graduationvideo" exact>
          <GraduationVideo/>
        </Route>

  
      </Switch>

      <Footer/>
    </Router>
  );
  
  export default Routes;