import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Components/Carousel/CarouselMain/CarouselMain';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import OfferCard from './Pages/Offer/OfferCard';

function App() {
  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
      <OfferCard></OfferCard>
      <Footer></Footer>
    </div>
  );
}

export default App;
