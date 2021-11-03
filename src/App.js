import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Components/Carousel/CarouselMain/CarouselMain';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Pricing from './Pages/Pricing/Pricing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './Components/LogIn/LogIn';
import AuthProvider from './Context/AuthProvider';
import YourCart from './Pages/YourCart/YourCart';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Admin from './Pages/Admin/Admin';
import Offer from './Pages/Offer/Offer';
import Room from './Pages/Room/Room';
import NotFound from './Pages/NotFoundPage/NotFound';
import ConfirmShipping from './Components/ConfirmShipping/ConfirmShipping';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Carousel}></Route>
        <Route path='/home' component={Carousel}></Route>
        <Route path='/recommended' component={Offer}></Route>
        <Route path='/bestplan' component={Room}></Route>
        <Route path='/membership' component={Pricing}></Route>
        <Route path='/login' component={LogIn}></Route>
        <PrivateRoute path='/yourcart'>
          <YourCart></YourCart>
        </PrivateRoute>
        <PrivateRoute path='/admin'>
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path='/shipping'>
          <ConfirmShipping></ConfirmShipping>
        </PrivateRoute>
       <Route path='' component={NotFound}></Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
  );
}

export default App;
