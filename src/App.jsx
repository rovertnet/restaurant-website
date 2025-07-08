import Categories from "./body/composants/Categories.jsx";
import FeaturesSection from "./body/composants/FeaturesSection.jsx";
import MenuCards from "./body/composants/MenuCards.jsx";
import HeroSection from "./body/HeroSection.jsx";
import NavBar from "./head/NavBar.jsx"


function App() {

  return (
    <>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <Categories />
      <MenuCards />
    </>
  );
}

export default App
