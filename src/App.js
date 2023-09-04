import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Review from "./components/reviews/Reviews";
import Explore from "./components/explore/Explore";
import Footer from "./components/footer/Footer";
import Pricing from "./components/pricing/Pricing";
import About from "./components/about/About";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About/>
      <Explore />
      <Review />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
