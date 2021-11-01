import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Components/Carousel/CarouselMain/CarouselMain';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import OfferCard from './Pages/Offer/OfferCard';
import RoomCard from './Pages/Room/RoomCard';
import Pricing from './Pages/Pricing/Pricing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './Components/LogIn/LogIn';
import AuthProvider from './Context/AuthProvider';
import YourCart from './Pages/YourCart/YourCart';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Carousel}></Route>
        <Route path='/home' component={Carousel}></Route>
        <Route path='/recommended' component={OfferCard}></Route>
        <Route path='/bestplan' component={RoomCard}></Route>
        <Route path='/membership' component={Pricing}></Route>
        <Route path='/login' component={LogIn}></Route>
        <Route path='/yourcart'>
          <YourCart></YourCart>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
  );
}

export default App;
