import Categories from "./body/composants/Categories.jsx";
import ContactBanner from "./body/composants/ContactBanner.jsx";
import FAQSection from "./body/composants/FAQSection.jsx";
import FeaturesSection from "./body/composants/FeaturesSection.jsx";
import Footer from "./body/composants/Footer.jsx";
import MenuCards from "./body/composants/MenuCards.jsx";
import PartnersSection from "./body/composants/PartnersSection.jsx";
import PromoBanner from "./body/composants/PromoBanner.jsx";
import TeamSection from "./body/composants/TeamSection.jsx";
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
      <FAQSection />
      <TeamSection />
      <PartnersSection />
      <ContactBanner />
      <Footer />
    </>
  );
}

export default App
