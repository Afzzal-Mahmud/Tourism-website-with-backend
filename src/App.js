import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Components/Carousel/CarouselMain/CarouselMain';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import OfferCard from './Pages/Offer/OfferCard';
import RoomCard from './Pages/Room/RoomCard';
import Pricing from './Pages/Pricing/Pricing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Carousel}></Route>
        <Route path='/home' component={Carousel}></Route>
        <Route path='/recommended' component={OfferCard}></Route>
        <Route path='/bestplan' component={RoomCard}></Route>
        <Route path='/membership' component={Pricing}></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;