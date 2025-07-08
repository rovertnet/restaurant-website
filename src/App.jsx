import Categories from "./body/composants/Categories.jsx";
import FeaturesSection from "./body/composants/FeaturesSection.jsx";
import MenuCards from "./body/composants/MenuCards.jsx";
import PromoBanner from "./body/composants/PromoBanner.jsx";
import Testimonials from "./body/composants/Testimonials.jsx";
import TopPicks from "./body/composants/TopPicks.jsx";
import HeroSection from "./body/HeroSection.jsx";
import NavBar from "./head/NavBar.jsx"


function App() {

  return (
    <>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <Categories />
      <TopPicks />
      <MenuCards />
      <PromoBanner />
      <Testimonials />
    </>
  );
}

export default App
